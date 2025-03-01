"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  role: z.enum(["captain", "owner"]),
})

interface SignupFlowProps {
  defaultRole?: "captain" | "owner" | null
}

export function SignupFlow({ defaultRole = "captain" }: SignupFlowProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: defaultRole || "captain",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // Store role in localStorage
    localStorage.setItem("userRole", values.role)
    // Redirect to auth
    router.push("/auth")
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">Choose your account type to get started</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="captain" id="captain" className="peer sr-only" />
                      <Label
                        htmlFor="captain"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mb-3 h-6 w-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M16 12h-3" />
                          <path d="M13 15h-3" />
                          <path d="M10 12H7" />
                          <path d="M10 9H7" />
                        </svg>
                        Captain
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="owner" id="owner" className="peer sr-only" />
                      <Label
                        htmlFor="owner"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mb-3 h-6 w-6"
                        >
                          <path d="M4 22h16" />
                          <path d="M12 2v20" />
                          <path d="M12 13H2" />
                          <path d="M12 13h10" />
                          <path d="M2 13v9" />
                          <path d="M22 13v9" />
                        </svg>
                        Owner
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Loading..." : "Continue"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

function Label({ className, ...props }: React.HTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  )
}

