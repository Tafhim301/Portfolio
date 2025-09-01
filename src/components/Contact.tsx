/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";

// ✅ Validation schema with zod
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (_values: ContactForm) => {
    if (!formRef.current) return;
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen py-20 flex items-center justify-center bg-gray-950 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="w-full max-w-2xl shadow-2xl rounded-2xl bg-gray-900 text-gray-100 border border-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">
            Contact Information
          </CardTitle>
          <p className="text-center text-gray-400 mt-2">
            Phone: <span className="text-blue-400">+880 1638-823556</span> | 
            Email: <span className="text-blue-400">tafhimul301@gmail.com</span>
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Your Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        className="bg-gray-800 text-gray-200 border-gray-700"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

       
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Your Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-gray-800 text-gray-200 border-gray-700"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

     
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message..."
                        className="bg-gray-800 text-gray-200 border-gray-700 min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {sent && (
                <p className="text-green-400 text-center mt-2 font-medium">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
