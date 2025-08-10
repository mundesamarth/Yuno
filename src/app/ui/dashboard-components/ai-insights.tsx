import { Card } from "@/components/ui/card";

export default function AiInsights(){
    return(
        <Card className="border-0">
            <div>
                <h1>AI Insights</h1>
                <div>
                    <h1>Smart Alerts</h1>
                    <p>{`You're spending 30% more on dining this month. Consider meal planning to save $180.`}</p>
                    <h1>Opportunity </h1>
                    <p>{`Based on your income pattern, you could save an extra $250 by adjusting your subscriptions.`}</p>
                </div>
            </div>
        </Card>
    )
}