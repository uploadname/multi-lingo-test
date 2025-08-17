import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Pause, Play, CheckCircle, XCircle } from "lucide-react";
import { examQuestions, questionTranslations } from "@/data/examQuestions";
import { languages } from "@/data/languages";

interface Answer {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
  timeSpent: number;
}

const ExamTest = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const languageCode = searchParams.get('lang') || 'en';
  
  // Exam state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isExamComplete, setIsExamComplete] = useState(false);

  // Randomize questions for this exam session
  const [randomizedQuestions] = useState(() => {
    return [...examQuestions].sort(() => Math.random() - 0.5).slice(0, 24);
  });

  const currentQuestion = randomizedQuestions[currentQuestionIndex];
  const language = languages.find(lang => lang.code === languageCode);
  const translation = questionTranslations[languageCode]?.[currentQuestion?.id];

  // Timer effect - 45 minute limit
  useEffect(() => {
    if (!isPaused && !isExamComplete) {
      const timer = setInterval(() => {
        setTimeElapsed(prev => {
          // Auto-complete exam after 45 minutes (2700 seconds)
          if (prev >= 2699) {
            setIsExamComplete(true);
            return 2700;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isPaused, isExamComplete]);

  // Auto-save progress to localStorage
  useEffect(() => {
    const examState = {
      examId,
      languageCode,
      currentQuestionIndex,
      answers,
      timeElapsed,
      randomizedQuestions
    };
    localStorage.setItem(`exam_${examId}_${languageCode}`, JSON.stringify(examState));
  }, [examId, languageCode, currentQuestionIndex, answers, timeElapsed, randomizedQuestions]);

  const handleAnswerSelect = (optionIndex: number) => {
    if (showFeedback) return;
    
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    
    const answer: Answer = {
      questionId: currentQuestion.id,
      selectedOption: optionIndex,
      isCorrect,
      timeSpent: 30 // Could track individual question time
    };

    setAnswers(prev => [...prev, answer]);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < randomizedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsExamComplete(true);
    }
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const formatTime = (seconds: number) => {
    const totalMinutes = Math.floor(seconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeRemaining = () => {
    const remaining = Math.max(0, 2700 - timeElapsed); // 45 minutes = 2700 seconds
    return formatTime(remaining);
  };

  const getScore = () => {
    const correct = answers.filter(a => a.isCorrect).length;
    const total = answers.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, total, percentage };
  };

  // Results view
  if (isExamComplete) {
    const { correct, total, percentage } = getScore();
    const passed = percentage >= 75;

    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate("/")}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Exams</span>
                </Button>
                <div className="h-6 w-px bg-border" />
                <div>
                  <h1 className="font-semibold text-foreground">
                    Exam #{examId} - Results
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                passed ? 'bg-correct text-correct-foreground' : 'bg-incorrect text-incorrect-foreground'
              }`}>
                {passed ? (
                  <CheckCircle className="w-10 h-10" />
                ) : (
                  <XCircle className="w-10 h-10" />
                )}
              </div>
              
              <h2 className="text-3xl font-bold mb-2">
                {passed ? 'Congratulations!' : 'Keep Practicing!'}
              </h2>
              
              <p className="text-muted-foreground mb-8">
                {passed 
                  ? 'You have passed the Life in the UK Test!' 
                  : 'You need 75% to pass. Try again!'}
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">{percentage}%</div>
                  <div className="text-sm text-muted-foreground">Final Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-correct mb-2">{correct}</div>
                  <div className="text-sm text-muted-foreground">Correct</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-incorrect mb-2">{total - correct}</div>
                  <div className="text-sm text-muted-foreground">Incorrect</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate(`/exam/${examId}`)}
                  variant="outline"
                >
                  Try Again
                </Button>
                <Button onClick={() => navigate("/")}>
                  Back to Exams
                </Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate(`/exam/${examId}`)}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Exit</span>
              </Button>
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="font-semibold text-foreground">
                  Exam #{examId}
                </h1>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>{language?.flag}</span>
                  <span>{language?.name}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Time Remaining: {getTimeRemaining()}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handlePauseResume}
                className="flex items-center space-x-2"
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                <span>{isPaused ? 'Resume' : 'Pause'}</span>
              </Button>
            </div>
          </div>
          
          {/* Progress */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of {randomizedQuestions.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(((currentQuestionIndex + 1) / randomizedQuestions.length) * 100)}% Complete
              </span>
            </div>
            <Progress value={((currentQuestionIndex + 1) / randomizedQuestions.length) * 100} />
          </div>
        </div>
      </header>

      {/* Paused Overlay */}
      {isPaused && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-20 flex items-center justify-center">
          <Card className="p-8 text-center max-w-md">
            <Pause className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">Exam Paused</h3>
            <p className="text-muted-foreground mb-6">
              Your progress has been saved. Click resume to continue.
            </p>
            <Button onClick={handlePauseResume}>
              <Play className="w-4 h-4 mr-2" />
              Resume Exam
            </Button>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* English Panel */}
            <Card className="p-6 bg-exam-panel border-exam-border">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary">English</Badge>
                <Badge variant="outline">{currentQuestion?.category}</Badge>
              </div>
              
              <h3 className="text-lg font-medium mb-6 text-foreground">
                {currentQuestion?.question}
              </h3>
              
              <div className="space-y-3">
                {currentQuestion?.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={
                      showFeedback 
                        ? index === currentQuestion.correctAnswer 
                          ? "default"
                          : selectedOption === index 
                            ? "destructive" 
                            : "outline"
                        : selectedOption === index 
                          ? "default" 
                          : "outline"
                    }
                    className="w-full text-left justify-start h-auto p-4 whitespace-normal"
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                  >
                    <span className="mr-3 font-semibold">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Translation Panel */}
            <Card className="p-6 bg-exam-panel border-exam-border">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary">
                  <span className="mr-2">{language?.flag}</span>
                  {language?.name}
                </Badge>
                <Badge variant="outline">{currentQuestion?.category}</Badge>
              </div>
              
              <h3 className="text-lg font-medium mb-6 text-foreground">
                {translation?.question || currentQuestion?.question}
              </h3>
              
              <div className="space-y-3">
                {(translation?.options || currentQuestion?.options).map((option, index) => (
                  <Button
                    key={index}
                    variant={
                      showFeedback 
                        ? index === currentQuestion.correctAnswer 
                          ? "default"
                          : selectedOption === index 
                            ? "destructive" 
                            : "outline"
                        : selectedOption === index 
                          ? "default" 
                          : "outline"
                    }
                    className="w-full text-left justify-start h-auto p-4 whitespace-normal"
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                  >
                    <span className="mr-3 font-semibold">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Feedback and Next Button */}
          {showFeedback && (
            <Card className={`mt-6 p-6 ${
              selectedOption === currentQuestion.correctAnswer 
                ? 'bg-correct-bg border-correct' 
                : 'bg-incorrect-bg border-incorrect'
            }`}>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {selectedOption === currentQuestion.correctAnswer ? (
                      <CheckCircle className="w-6 h-6 text-correct" />
                    ) : (
                      <XCircle className="w-6 h-6 text-incorrect" />
                    )}
                    <div>
                      <div className="font-semibold">
                        {selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                      </div>
                      {selectedOption !== currentQuestion.correctAnswer && (
                        <div className="text-sm text-muted-foreground">
                          The correct answer was {String.fromCharCode(65 + currentQuestion.correctAnswer)}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button onClick={handleNextQuestion}>
                    {currentQuestionIndex < randomizedQuestions.length - 1 ? 'Next Question' : 'Finish Exam'}
                  </Button>
                </div>
                
                {/* Explanation */}
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Explanation:</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* English Explanation */}
                    <div>
                      <Badge variant="secondary" className="mb-2">English</Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                    
                    {/* Translated Explanation */}
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        <span className="mr-2">{language?.flag}</span>
                        {language?.name}
                      </Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {translation?.explanation || currentQuestion.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default ExamTest;