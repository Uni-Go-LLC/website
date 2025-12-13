import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, MapPin, Clock, DollarSign, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobDetailsData: Record<string, any> = {
    "android-developer-intern": {
        title: "Android Developer Intern",
        link: "https://forms.gle/xAWwTdfHLHf97FrJA",
        location: "Remote / Hybrid / On-Site (Sioux Falls, SD)",
        duration: "3-6 months",
        hoursPerWeek: "Part-Time or Full-Time",
        compensation: "Equity",
        aboutRole: `We're building the next generation of ridesharing exclusively for college students — and we want an Android Developer Intern to help bring Uni Go on Android. You'll work closely with our engineering team to build features that students will rely on for daily transportation across campus and beyond.`,
        whatYouDo: [
            "Develop and maintain features for our Android app using Kotlin",
            "Build clean, intuitive UI components aligned with product and design specs",
            "Implement real-time location tracking, map views, and route-related features",
            "Work on ride creation, ride requests, payment flows, and matching logic",
            "Optimize performance, app startup, caching, and background behaviors",
            "Write clean, maintainable code, and participate in code reviews",
            "Collaborate with engineers, designers, and product leads to ship features quickly",
        ],
        whatWeLookingFor: [
            "Currently enrolled in Computer Science or a related field",
            "Experience with Kotlin, Android Studio, and modern Android development",
            "Understanding of common architectures (MVVM, MVC, etc.)",
            "Familiarity with Firebase or other NoSQL backends",
            "Experience with authentication flows and REST APIs",
            "Knowledge of Git and version control best practices",
            "Passion for building tech that solves real problems for students",
            "Bonus: Experience with Google Maps SDK, location services, or payment SDKs",
        ],
        whyJoinUs: [
            { title: "Learn & Grow", description: "Work with experienced engineers and gain real-world Android development experience" },
            { title: "Great Culture", description: "Collaborative team environment with flexible working hours" },
            { title: "Make an Impact", description: "Your code will be used by students across campuses" },
            { title: "Career Growth", description: "Potential for full-time position after internship" },
        ],
        applicationProcess: [
            "Submit your resume and optionally a cover letter",
            "Include links to your GitHub profile or portfolio",
            "Initial screen",
            "Team interview (includes technical questions)",
        ],
    },
    "ios-developer-intern": {
        title: "iOS Developer Intern",
        link: "https://forms.gle/6c4YXyBJoE96bqZo8",
        location: "Remote / Hybrid / On-Site (Sioux Falls, SD)",
        duration: "3-6 months",
        hoursPerWeek: "Part-Time or Full-Time",
        compensation: "Equity",
        aboutRole: `We're building the next generation of ridesharing exclusively for college students! Join our fast-growing startup as an iOS Developer Intern and help shape the future of campus transportation. You'll work directly with our engineering team to build features that students will use daily.`,
        whatYouDo: [
            "Develop and maintain features for our iOS app using Swift and SwiftUI",
            "Collaborate with designers to create beautiful, intuitive user interfaces",
            "Implement real-time location tracking and map integrations",
            "Work on payment processing and ride matching algorithms",
            "Debug and optimize app performance for the best user experience",
            "Participate in code reviews and contribute to technical discussions",
        ],
        whatWeLookingFor: [
            "Currently enrolled in a Computer Science or related program",
            "Experience with Swift and iOS development (coursework or personal projects)",
            "Understanding of mobile app architecture (MVC, MVVM, etc)",
            "Experience with authentication and NoSQL databases",
            "Experience with Git and version control",
            "Passion for solving real problems for college students",
            "Bonus: Experience with MapKit, CoreLocation, or payment integration",
        ],
        whyJoinUs: [
            { title: "Learn & Grow", description: "Work with experienced engineers and gain real-world iOS development experience" },
            { title: "Make an Impact", description: "Your code will be used by students across campuses" },
            { title: "Great Culture", description: "Collaborative team environment with flexible working hours" },
            { title: "Career Growth", description: "Potential for full-time position after internship" },
        ],
        applicationProcess: [
            "Submit your resume and optionally a cover letter",
            "Include links to your GitHub profile or portfolio",
            "Initial screen",
            "Team interview (includes technical questions)",
        ],
    },
    "social-media-intern": {
        title: "Social Media Intern",
        link: "https://forms.gle/UKu59P3geWPkyLKA9",
        location: "Remote / Hybrid / On-Site (Sioux Falls, SD)",
        duration: "3-6 months",
        hoursPerWeek: "Part-Time or Full-Time",
        compensation: "Equity",
        aboutRole: `We're building the next generation of ridesharing exclusively for college students — and we need a sharp, creative Social Media Intern to help grow our brand. You'll create content, manage our online presence, and shape the way students discover and engage with our platform.`,
        whatYouDo: [
            "Create engaging content for Instagram, TikTok, LinkedIn, and other platforms",
            "Develop short-form video ideas tailored to student audiences",
            "Plan and manage the social content calendar",
            "Track trends and produce timely, relevant posts",
            "Respond to comments and engage with our community",
            "Run small experiments to improve reach and engagement",
            "Collaborate with design, product, and operations teams",
            "Assist with campus ambassador content and campaigns",
        ],
        whatWeLookingFor: [
            "Currently enrolled in Marketing, Communications, Media, or a related program",
            "Experience with social platforms, especially Instagram",
            "Ability to create and edit short-form videos",
            "Strong sense of storytelling and visual style",
            "Familiarity with analytics tools (native or third-party)",
            "Comfortable experimenting with new formats and ideas",
            "Bonus: Experience running social accounts for clubs, startups, or personal brands",
        ],
        whyJoinUs: [
            { title: "Make an Impact", description: "Your content will shape how students see and interact with our brand" },
            { title: "Great Culture", description: "Collaborative team, flexible hours, and space to try bold ideas" },
            { title: "Career Growth", description: "Potential for a long-term role if it's a strong fit" },
        ],
        applicationProcess: [
            "Submit your resume and optional cover letter",
            "Include links to your social media portfolio or accounts you've managed",
            "Initial screen",
            "Team interview (content review + quick exercise)",
        ],
    },
    "business-developer-intern": {
        title: "Business Developer Intern",
        link: "https://forms.gle/fbip1D8f2mNbaN4AA",
        location: "Remote / Hybrid / On-Site (Sioux Falls, SD)",
        duration: "3-6 months",
        hoursPerWeek: "Part-Time or Full-Time",
        compensation: "Equity",
        aboutRole: `We're building the next generation of ridesharing exclusively for college students — and we need a Business Developer Intern to help us grow our presence in new markets and expand our revenue streams. You'll take ownership of key business initiatives, from developing go-to-market strategies to identifying partnerships and optimizing our business models for sustainable growth.`,
        whatYouDo: [
            "Research and analyze market opportunities across college campuses",
            "Develop and test different business models to maximize revenue and user growth",
            "Identify and pursue strategic partnerships with universities, student organizations, and local businesses",
            "Create strategies for customer acquisition and retention",
            "Conduct competitive analysis and market research",
            "Support pitch preparation for investors and stakeholders",
            "Collaborate with product and operations teams to implement business initiatives",
            "Track key metrics and prepare reports on business performance",
        ],
        whatWeLookingFor: [
            "Currently enrolled in Business, Economics, Entrepreneurship, or a related field",
            "Strong analytical and problem-solving skills",
            "Experience with market research or competitive analysis",
            "Understanding of business models and unit economics",
            "Excellent communication and presentation skills",
            "Ability to work independently and manage multiple projects",
            "Passion for startups and the transportation/tech space",
            "Bonus: Experience with business development, partnership strategy, or B2B/B2C models",
        ],
        whyJoinUs: [
            { title: "Learn & Grow", description: "Gain hands-on experience in business development and entrepreneurship" },
            { title: "Make an Impact", description: "Your strategies will directly influence how our business scales" },
            { title: "Great Culture", description: "Fast-paced startup environment with mentorship and learning opportunities" },
            { title: "Career Growth", description: "Potential for full-time position after internship" },
        ],
        applicationProcess: [
            "Submit your resume and optionally a cover letter",
            "Share any examples of market research or business analysis you've done",
            "Initial screen",
            "Team interview (strategy discussion + case study exercise)",
        ],
    },
};

const JobDetails = () => {
    const { jobId } = useParams<{ jobId: string }>();
    const navigate = useNavigate();

    const job = jobId ? jobDetailsData[jobId] : null;

    if (!job) {
        return (
            <Layout>
                <div className="py-16 md:py-24 text-center">
                    <h1 className="text-3xl font-bold text-foreground mb-4">Job Not Found</h1>
                    <Button onClick={() => navigate("/jobs")}>Back to Jobs</Button>
                </div>
            </Layout>
        );
    }

    const applyLink = job.link;

    return (
        <Layout>
            <section className="py-8 md:py-16 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => navigate("/jobs")}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Jobs</span>
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            {job.title}
                        </h1>

                        <div className="space-y-2 mb-8">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                <span>{job.duration} • {job.hoursPerWeek}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <DollarSign className="w-4 h-4" />
                                <span>{job.compensation}</span>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="shadow-gold"
                            asChild
                        >
                            <a href={applyLink} target="_blank" rel="noopener noreferrer">
                                <Send className="w-4 h-4 mr-2" />
                                Apply
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            About the Role
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {job.aboutRole}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            What You'll Do
                        </h2>
                        <ul className="space-y-3">
                            {job.whatYouDo.map((item: string, i: number) => (
                                <li key={i} className="flex gap-3 text-muted-foreground">
                                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            What We're Looking For
                        </h2>
                        <ul className="space-y-3">
                            {job.whatWeLookingFor.map((item: string, i: number) => (
                                <li key={i} className="flex gap-3 text-muted-foreground">
                                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-6">
                            Why Join Us?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {job.whyJoinUs.map((benefit: any, i: number) => (
                                <div key={i} className="bg-card border border-border rounded-lg p-4">
                                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Application Process
                        </h2>
                        <ol className="space-y-3">
                            {job.applicationProcess.map((step: string, i: number) => (
                                <li key={i} className="flex gap-3 text-muted-foreground">
                                    <span className="text-primary font-semibold flex-shrink-0">{i + 1}.</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-foreground rounded-2xl p-8 text-center"
                    >
                        <h3 className="text-2xl font-bold text-background mb-4">
                            Ready to Apply?
                        </h3>
                        <p className="text-background/70 mb-6">
                            Send us your resume, portfolio, and tell us why you'd be a great fit for the team.
                        </p>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-background text-background hover:bg-background hover:text-foreground"
                            asChild
                        >
                            <a href={applyLink} target="_blank" rel="noopener noreferrer">
                                <Send className="w-4 h-4 mr-2" />
                                Apply
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default JobDetails;
