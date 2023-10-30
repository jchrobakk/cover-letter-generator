'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select';

const FormSchema = z.object({
  resume: z.string().min(1, {
    message: 'Please enter your resume content',
  }),
  jobTitle: z.string().min(1, {
    message: 'Please enter job title',
  }),
  jobDescription: z.string().min(1, {
    message: 'Please enter job description',
  }),
  gptModel: z.string().min(1, {
    message: 'Please select GPT model',
  }),
});

export function CoverLetterForm({
  loading,
  onSubmit,
}: {
  loading: boolean;
  onSubmit: (
    resume: string,
    jobTitle: string,
    jobDescription: string,
    gptModel: string
  ) => void;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      gptModel: 'gpt-3.5-turbo',
    },
  });

  function handleSubmit(data: z.infer<typeof FormSchema>) {
    onSubmit(data.resume, data.jobTitle, data.jobDescription, data.gptModel);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4 max-w-2xl mx-auto"
      >
        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Just copy-paste your resume content here"
                  className="resize-none"
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Job title"
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Job description"
                  className="resize-none"
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gptModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GPT Model</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
                  <SelectItem value="gpt-3.5-turbo-16k">
                    gpt-3.5-turbo-16k
                  </SelectItem>
                  <SelectItem value="gpt-4">gpt-4</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button
            type="submit"
            disabled={loading}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
