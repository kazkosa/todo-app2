'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  text: z.string().min(1, '1文字以上入力してください'),
});

type FormData = z.infer<typeof schema>;

export default function TodoForm({
  onAdd,
}: {
  onAdd: (text: string) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    onAdd(data.text);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <input
        {...register('text')}
        className="border p-2 rounded w-full"
        placeholder="Enter To Do"
      />
      <button type="submit" className="bg-blue-500 text-white px-2 rounded">
        Add
      </button>
      {errors.text && <p className="text-red-500">{errors.text.message}</p>}
    </form>
  );
}
