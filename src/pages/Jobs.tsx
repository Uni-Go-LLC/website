import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobListings = [
    {
        id: "android-developer-intern",
        title: "Android Developer Intern",
        location: "Remote / Hybrid / On-Site (Sioux Falls, SD)",
        duration: "3-6 months",
        hoursPerWeek: "Part-Time or Full-Time",
        compensation: "Equity",
    },
    {
        id: "ios-developer-intern",
        title: "iOS Developer Intern",
        location: "Remote / Hybrid / On-Site (Sioux Falls, SD)",
        duration: "3-6 months",
        hoursPerWeek: "Part-Time or Full-Time",
        compensation: "Equity",
    },
    {
        id: "social-media-intern",
        title: "Social Media Intern",
        location: "Remote / Hybrid / On-Site (Sioux Falls, SD)",
        duration: "3-6 months",
        hoursPerWeek: "Part-Time or Full-Time",
        compensation: "Equity",
    },
    {
        id: "business-developer-intern",
        title: "Business Developer Intern",
        location: "Remote / Hybrid / On-Site (Sioux Falls, SD)",
        duration: "3-6 months",
        hoursPerWeek: "Part-Time or Full-Time",
        compensation: "Equity",
    },
];

const Jobs = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Open <span className="text-gradient-gold">Positions</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground">
                            Join our team and help build the future of campus ridesharing. We're looking for
                            passionate individuals to work on a platform used by students.
                        </p>

                        <br />

                        <p className="text-muted-foreground text-sm md:text-base">
                            Don't see a role that fits? Send us your resume at{" "}
                            <a href="mailto:uni.go.llc@gmail.com" className="text-gradient-gold hover:underline font-semibold">
                                uni.go.llc@gmail.com
                            </a>
                            {" "}- we're always looking for exceptional talent!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">
                        {jobListings.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={`/job/${job.id}`} className="no-underline">
                                    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 cursor-pointer">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-extrabold text-foreground mb-4">
                                                    {job.title}
                                                </h3>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-primary mt-1 md:mt-0" />
                                        </div>

                                        <div className="space-y-2 mb-6">
                                            <div className="flex items-center gap-2 text-muted-foreground font-normal">
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-sm">{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground font-normal">
                                                <Clock className="w-4 h-4" />
                                                <span className="text-sm">{job.duration} • {job.hoursPerWeek}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground font-normal">
                                                <DollarSign className="w-4 h-4" />
                                                <span className="text-sm">{job.compensation}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Jobs;
