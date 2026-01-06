'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Une erreur est survenue</h2>
        <p className="text-secondary/70 dark:text-accent/70">
          Nous nous excusons pour ce désagrément.
        </p>
        <button
          onClick={() => reset()}
          className="btn btn-primary btn-md"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
