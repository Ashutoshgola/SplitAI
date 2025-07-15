import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FEATURES, STEPS} from "@/lib/landing";

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16 dark:bg-gray-950">
      {/* Hero */}
      <section className="mt-20 pb-12 space-y-10 md:space-y-15 px-5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <Badge variant="outline" className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            Split expenses. Simplify life.
          </Badge>
                      <h1 className="gradient-title mx-auto max-w-6xl text-4xl font-bold md:text-8xl">
              SPLIT EXPENSE
            </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-300">
            Track shared expenses, split bills effortlessly, and settle up quickly
          </p>
          {/* ...buttons unchanged... */}
        </div>
        <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
          <div className="gradient p-1 aspect-[16/9]">
            <Image
              src="/splitai.png"
              width={1280}
              height={720}
              alt="Banner"
              className="rounded-lg mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features*/}
      <section id="features" className="bg-gray-50 py-20 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            Features
          </Badge>
                    <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Split expenses effortlessly
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-300">
            Say goodbye to awkward money talks — we keep your group expenses fair and simple.
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, bg, color, description }) => (
              <Card
                key={title}
                className="flex flex-col items-center space-y-4 p-6 text-center dark:bg-gray-800"
              >
                <div className={`rounded-full p-3 ${bg}`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <h3 className="text-xl font-bold dark:text-white">{title}</h3>
                <p className="text-gray-500 dark:text-gray-300">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*How it works*/}
      <section id="how-it-works" className="py-20 dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            How It Works
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Splitting expenses has never been easier
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-300">
            Follow these simple steps to start tracking and splitting expenses
            with friends.
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {STEPS.map(({ label, title, description }) => (
              <div key={label} className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600 dark:bg-green-900 dark:text-green-200">
                  {label}
                </div>
                <h3 className="text-xl font-bold dark:text-white">{title}</h3>
                <p className="text-gray-500 text-center dark:text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call‑to‑Action*/}
      <section className="bg-gray-50 py-20 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-dark-700 dark:text-white">
            Ready to simplify expense sharing?
          </h2>
          <Button asChild size="lg" className="bg-green-800 hover:opacity-90">
            <Link href="/dashboard">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/*Footer */}
     <footer className="border-t bg-dark-50 py-12 text-center text-sm dark:bg-dark-900/50 dark:text-black-400">
  © 2025 SplitAI | All rights reserved.
</footer>
    </div>
  );
}