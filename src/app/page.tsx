import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ThemeToggle } from "@/components/themeProvider/theme-toggle"
import HeroSection from "./components/HeroSection/HeroSection"
import AboutUs from "./components/AboutUs/AboutUs"
import Services from "./components/Services/Services"
import OurTeams from "./components/OurTeams/OurTeams"


export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <OurTeams/>
    </main>
  );
}
