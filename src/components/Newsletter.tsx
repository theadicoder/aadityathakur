import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const Newsletter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Here you would integrate with your newsletter service
      // For now, we'll just simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bento-card col-span-3">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Stay Updated</h2>
        <p className="text-gray-300 mb-8">
          Subscribe to our newsletter for the latest updates, tech insights, and project announcements.
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full sm:w-96">
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                      className="bg-card-hover"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full sm:w-auto"
            >
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </Form>
        
        <p className="mt-4 text-xs text-gray-400">
          By subscribing, you agree to our{" "}
          <a href="#" className="underline hover:text-white">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};