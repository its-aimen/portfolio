import { Home as HomeIcon } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-primary font-semibold text-lg mb-2">404</p>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        This page doesn't exist
      </h1>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you're looking for may have been moved or removed.
      </p>
      <a
        href="/"
        className="cosmic-button inline-flex items-center gap-2"
      >
        <HomeIcon className="w-4 h-4" />
        Back to home
      </a>
    </div>
  );
};

export default NotFound;
