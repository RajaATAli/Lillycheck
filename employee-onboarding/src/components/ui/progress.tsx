"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

// Define milestone interface
interface Milestone {
  value: number; // Value as percentage
  label: string; // Label to display
}

// ForwardRef type definition for Progress component
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorColor?: string; // Optional indicator color
    milestones?: Milestone[]; // Optional milestones array
  }
>(
  ({ className, value, indicatorColor, milestones = [], ...props }, ref) => (
    <div className="relative">
      {/* Progress bar root */}
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary", // Adjusted width here
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full flex-1 transition-all"
          style={{
            transform: `translateX(-${100 - (value || 0)}%)`, // Translate based on value
            backgroundColor: indicatorColor || 'hsl(var(--primary))' // Default or custom indicator color
          }}
        />
      </ProgressPrimitive.Root>
      {/* Render milestones */}
      {milestones.map((milestone, index) => (
        <div
          key={index}
          className="absolute top-full transform -translate-x-1/2"
          style={{ left: `${milestone.value}%` }} // Position milestone based on its value
        >
          <div className="milestone-box">
            <span className="inline-block milestone-label">
              {milestone.label} {/* Display milestone label */}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
)

Progress.displayName = ProgressPrimitive.Root.displayName // Set display name for component

export { Progress } // Export Progress component
