import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono()

app.get('/api/health', (c) => c.json({ status: 'ok' }))

app.get('/api/generate', (c) => {
  const { idea, category } = c.req.query()
  if (!idea) {
    return c.json({ ideas: generateIdeas() })
  }
  return c.json({ ideas: generateIdeas(idea, category) })
})

function generateIdeas(topic?: string, category?: string) {
  const ideas = [
    { title: 'AI Writing Assistant', description: 'A tool that helps writers overcome writer\'s block with AI suggestions', category: 'AI', difficulty: 'Medium' },
    { title: 'Habit Tracker App', description: 'Track daily habits with streaks and visual progress charts', category: 'Productivity', difficulty: 'Easy' },
    { title: 'Recipe Generator', description: 'Input ingredients you have and get recipe suggestions', category: 'Food', difficulty: 'Medium' },
    { title: 'Code Review Bot', description: 'Automated code review tool that catches common bugs and style issues', category: 'Developer Tools', difficulty: 'Hard' },
    { title: 'Personal Finance Dashboard', description: 'Track expenses, investments, and net worth in one place', category: 'Finance', difficulty: 'Medium' },
    { title: 'Study Timer', description: 'Pomodoro timer with break reminders and progress tracking', category: 'Education', difficulty: 'Easy' },
    { title: 'Job Application Tracker', description: 'Track job applications, interviews, and follow-ups', category: 'Productivity', difficulty: 'Easy' },
    { title: 'Open Source Directory', description: 'Discover and explore open source projects by language or topic', category: 'Developer Tools', difficulty: 'Medium' },
  ]

  let filtered = ideas
  if (topic) {
    filtered = filtered.filter(i =>
      i.title.toLowerCase().includes(topic.toLowerCase()) ||
      i.description.toLowerCase().includes(topic.toLowerCase())
    )
  }
  if (category) {
    filtered = filtered.filter(i => i.category === category)
  }

  return filtered.length > 0 ? filtered : ideas
}

export const runtime = 'nodejs'

export default handle(app)
