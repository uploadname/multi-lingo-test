import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Globe, Play } from "lucide-react";
import { languages } from "@/data/languages";

const ExamPage = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
  };

  const handleStartExam = () => {
    if (selectedLanguage) {
      navigate(`/exam/${examId}/test?lang=${selectedLanguage}`);
    }
  };

  const selectedLang = languages.find(lang => lang.code === selectedLanguage);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
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
                Exam #{examId}
              </h1>
              <p className="text-sm text-muted-foreground">Select your language</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Choose Your Language
            </h2>
            <p className="text-muted-foreground">
              Questions will be displayed in English with translations in your chosen language
            </p>
          </div>

          {/* Language Selection Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {languages.map((language) => (
              <Card 
                key={language.code}
                className={`p-0 overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedLanguage === language.code 
                    ? 'ring-2 ring-primary bg-primary/5' 
                    : 'hover:bg-secondary/50'
                }`}
                onClick={() => handleLanguageSelect(language.code)}
              >
                <div className="p-4 text-center">
                  <div className="text-2xl mb-2">{language.flag}</div>
                  <div className="font-medium text-foreground text-sm mb-1">
                    {language.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {language.nativeName}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Selected Language & Start Button */}
          {selectedLanguage && (
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{selectedLang?.flag}</div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {selectedLang?.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Questions will be translated to {selectedLang?.nativeName}
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={handleStartExam}
                  size="lg"
                  className="flex items-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Start Exam</span>
                </Button>
              </div>
            </Card>
          )}

          {/* Exam Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <div className="text-lg font-semibold text-primary mb-1">24</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-lg font-semibold text-primary mb-1">45min</div>
              <div className="text-sm text-muted-foreground">Time Limit</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-lg font-semibold text-primary mb-1">75%</div>
              <div className="text-sm text-muted-foreground">Pass Mark</div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamPage;