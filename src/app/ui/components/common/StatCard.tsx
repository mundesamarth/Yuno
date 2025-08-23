import React, { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  change?: string;
  value: string;
  trendIcon: ReactNode; // MoveUpRight or MoveDownRight
  circleIcon: ReactNode; // TrendingUp, TrendingDown, PoundSterling, Goal
  circleBg: string; // background color of circle
  circleBorder: string; // border color of circle
  showComparision?: boolean;
}

export default function StatCard({
  title,
  value,
  change,
  trendIcon,
  circleIcon,
  circleBg,
  circleBorder,
  showComparision,
}: StatCardProps) {
  return (
    <Card className="relative border-0 shadow-sm transition-shadow overflow-hidden px-4">
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ backgroundColor: circleBorder }}
      ></div>
      <div className="flex justify-between">
        <div>
          <p className="text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold mt-2"> {value}</p>
          <p className="flex items-center justify-between mt-2">
            <span className="flex text-xs items-center">
              {trendIcon} {`${change}%`} {showComparision && "vs Last Month"}
            </span>
          </p>
        </div>
        <div className="flex">
          <span
            className="inline-flex items-center justify-center w-10 h-10 border border-r rounded-full"
            style={{ backgroundColor: circleBg, borderColor: circleBorder }}
          >
            {circleIcon}
          </span>
        </div>
      </div>
    </Card>
  );
}
