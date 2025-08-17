import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // Generate exam buttons (16 "Exam" + 17 "Egzam" = 33 total)
  const examButtons = [
    ...Array.from({ length: 16 }, (_, i) => ({ 
      id: i + 1, 
      label: "Exam", 
      type: "exam" as const 
    })),
    ...Array.from({ length: 17 }, (_, i) => ({ 
      id: i + 17, 
      label: "Egzam", 
      type: "egzam" as const 
    }))
  ];

  const handleExamClick = (examId: number) => {
    navigate(`/exam/${examId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Life in the UK Test</h1>
              <p className="text-muted-foreground">Multilingual Practice Exams</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Choose Your Practice Exam
          </h2>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <Globe className="w-4 h-4" />
            <span>Available in 16 languages</span>
          </div>
        </div>

        {/* Exam Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 max-w-7xl mx-auto">
          {examButtons.map((exam) => (
            <Card 
              key={exam.id}
              className="p-0 overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <Button
                onClick={() => handleExamClick(exam.id)}
                variant="ghost"
                className="w-full h-24 flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <BookOpen className="w-6 h-6" />
                <span className="font-medium">{exam.label}</span>
                <span className="text-xs opacity-75">#{exam.id}</span>
              </Button>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">33</div>
            <div className="text-sm text-muted-foreground">Practice Exams</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">16</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">24</div>
            <div className="text-sm text-muted-foreground">Questions per Exam</div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;