"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const CATEGORIES = ["All", "AI", "Productivity", "Developer Tools", "Finance", "Food", "Education"]

interface Idea {
  title: string
  description: string
  category: string
  difficulty: string
}

const SEED_IDEAS: Idea[] = [
  { title: "AI Writing Assistant", description: "A tool that helps writers overcome writer's block with AI-powered suggestions and prompts.", category: "AI", difficulty: "Medium" },
  { title: "Habit Tracker App", description: "Track daily habits with streaks, visual progress charts, and smart reminders.", category: "Productivity", difficulty: "Easy" },
  { title: "Recipe Generator", description: "Input ingredients you have at home and get creative recipe suggestions.", category: "Food", difficulty: "Medium" },
  { title: "Code Review Bot", description: "Automated code review tool that catches common bugs, style issues, and security vulnerabilities.", category: "Developer Tools", difficulty: "Hard" },
  { title: "Personal Finance Dashboard", description: "Track expenses, investments, and net worth in one unified view with charts.", category: "Finance", difficulty: "Medium" },
  { title: "Study Timer", description: "Pomodoro timer with break reminders, focus tracking, and weekly progress reports.", category: "Education", difficulty: "Easy" },
  { title: "Job Application Tracker", description: "Track job applications, interviews, offers, and follow-ups in one place.", category: "Productivity", difficulty: "Easy" },
  { title: "Open Source Directory", description: "Discover and explore open source projects by language, topic, or difficulty.", category: "Developer Tools", difficulty: "Medium" },
  { title: "Smart Meal Planner", description: "Weekly meal planner that generates shopping lists based on your dietary goals.", category: "Food", difficulty: "Medium" },
  { title: "Portfolio Website Builder", description: "Drag-and-drop builder for developer portfolios with GitHub integration.", category: "Developer Tools", difficulty: "Medium" },
]

export default function Home() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [ideas, setIdeas] = useState<Idea[]>(SEED_IDEAS)

  const filtered = ideas.filter((idea) => {
    const matchesSearch = search === "" ||
      idea.title.toLowerCase().includes(search.toLowerCase()) ||
      idea.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === "All" || idea.category === category
    return matchesSearch && matchesCategory
  })

  const shuffle = () => {
    setIdeas([...SEED_IDEAS].sort(() => Math.random() - 0.5))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Project Idea Generator
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Stuck on what to build? Browse ideas by category, search by topic, or just hit shuffle for inspiration.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-2xl mx-auto">
          <Input
            placeholder="Search ideas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
          />
          <Button onClick={shuffle} variant="outline" className="bg-slate-800 border-slate-700 hover:bg-slate-700">
            🎲 Shuffle
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(cat)}
              className={category === cat ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-800 border-slate-700"}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((idea, i) => (
            <Card key={i} className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                    {idea.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    idea.difficulty === "Easy" ? "bg-green-600/20 text-green-400" :
                    idea.difficulty === "Medium" ? "bg-yellow-600/20 text-yellow-400" :
                    "bg-red-600/20 text-red-400"
                  }`}>
                    {idea.difficulty}
                  </span>
                </div>
                <CardTitle className="mt-3 text-lg">{idea.title}</CardTitle>
                <CardDescription className="text-slate-400">{idea.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full bg-slate-700 border-slate-600 hover:bg-slate-600">
                  Save Idea
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-slate-500 mt-12">
            No ideas match your search. Try a different keyword!
          </div>
        )}
      </div>
    </div>
  )
}
