import { motion } from "framer-motion";
import { useState } from "react";
import createRideRequestImage from "@/assets/images/create-ride-request.png";
import requestRideDetailsImage from "@/assets/images/request-ride-details-2.png"
import createRideOfferImage from "@/assets/images/create-ride-offer-2.png";
import offerRideDetailsImage from "@/assets/images/offer-ride-details.png";
import { Layout } from "@/components/layout/Layout";
import { MapPin, DollarSign, Shield, Clock, Bell, Users, Car } from "lucide-react";
import { BetaSignupButton } from "@/components/BetaSignupButton";
import { Button } from "@/components/ui/button";

const riderFeatures = [
    {
        icon: MapPin,
        title: "Find Rides Anywhere",
        description: "Browse available rides by drivers heading your way or post a ride request with your budget.",
    },
    {
        icon: DollarSign,
        title: "Save Money",
        description: "Ride by yourself or split costs with other students. Pay prices set by student drivers. No app fee means cheaper rides for you.",
    },
    {
        icon: Clock,
        title: "Flexible Schedules",
        description: "Find rides that match your schedule. Last-minute trips or planned journeys.",
    },
    {
        icon: Shield,
        title: "Safe & Verified",
        description: "All users are verified with university email. So you can ride with confidence.",
    },
    {
        icon: Clock,
        title: "Short or Long Trips",
        description: "Ride around town or when you are headed home for breaks. Drivers can take you anywhere for the right price.",
    },
    {
        icon: Bell,
        title: "Never Miss a Ride Offer",
        description: "Set points of interest to get notified when rides are available for your favorite routes.",
    },
];

const driverFeatures = [
    {
        icon: MapPin,
        title: "Find Rides Anywhere",
        description: "Browse available rides requests or post a ride offer with your own price per seat.",
    },
    {
        icon: DollarSign,
        title: "Earn Extra Money",
        description: "Set your own rates and earn for each ride. No platform fees, which means you keep 100% of your earnings.",
    },
    {
        icon: MapPin,
        title: "Flexible Schedules",
        description: "Drive your own routes between classes, weekends, or whenever fits your schedule. Choose when, where, and how often you drive. No restrictions.",
    },
    {
        icon: Shield,
        title: "Safe & Verified",
        description: "All users are verified with university email. So you can drive with confidence.",
    },
    {
        icon: Clock,
        title: "Short or Long Trips",
        description: "Drive around town or when you are headed home for breaks. You choose the distance.",
    },
    {
        icon: Bell,
        title: "Never Miss a Ride Request",
        description: "Set points of interest to get notified when someone requests a ride for your favorite routes.",
    },
];

const riderHowItWorks = [
    {
        step: "1",
        title: "Browse or Post",
        description: "Check the ride feed for available trips or post your own ride request with your budget and number of seats needed.",
    },
    {
        step: "2",
        title: "Connect with Driver",
        description: "Multiple drivers can offer you the ride and you can choose who to ride with.",
    },
    {
        step: "3",
        title: "Enjoy Your Ride",
        description: "Meet your driver at the agreed location and enjoy your trip.",
    },
    {
        step: "4",
        title: "Rate & Review",
        description: "Share your experience to help build a trusted community.",
    },
];

const driverHowItWorks = [
    {
        step: "1",
        title: "Browse or Post",
        description: "Check the ride feed for available requests or post your own ride offer with your price per seat.",
    },
    {
        step: "2",
        title: "Receive Requests",
        description: "Get ride requests from students heading your way. Accept or decline; you are in control.",
    },
    {
        step: "3",
        title: "Complete the Ride",
        description: "Pick up your passengers from the agreed pickup point and drive.",
    },
    {
        step: "4",
        title: "Earn & Rate",
        description: "Get paid. Build your reputation with positive ratings.",
    },
];

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState<"riders" | "drivers">("riders");

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
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            How Uni Go <span className="text-gradient-gold">Works</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Whether you're looking for an affordable ride or want to earn money by driving, Uni Go makes it simple.
                            See how both riders and drivers benefit from our platform.
                        </p>

                        {/* Tab Navigation */}
                        <div className="mt-10 flex justify-center">
                            <div className="bg-card/80 border border-border/80 rounded-2xl shadow-uni-md backdrop-blur-sm px-3 py-3 w-full max-w-2xl">
                                <p className="text-center text-xs md:text-sm text-muted-foreground mb-3 font-medium tracking-wide uppercase">
                                    How Uni Go works for...
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <Button
                                        variant={activeTab === "riders" ? "default" : "outline"}
                                        size="lg"
                                        onClick={() => setActiveTab("riders")}
                                        className={`${activeTab === "riders" ? "shadow-gold bg-primary text-primary-foreground" : "bg-background"} w-full justify-center text-base md:text-lg py-6`}
                                    >
                                        Riders
                                    </Button>
                                    <Button
                                        variant={activeTab === "drivers" ? "default" : "outline"}
                                        size="lg"
                                        onClick={() => setActiveTab("drivers")}
                                        className={`${activeTab === "drivers" ? "shadow-gold bg-primary text-primary-foreground" : "bg-background"} w-full justify-center text-base md:text-lg py-6`}
                                    >
                                        Drivers
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Riders Section */}
            {activeTab === "riders" && (
                <>
                    {/* Hero Section */}
                    <section className="py-16 md:py-24 relative overflow-hidden">
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
                                >
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                                        Get Where You Need to Go,{" "}
                                        <span className="text-gradient-gold">Affordably</span>
                                    </h2>

                                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                                        Whether you need a ride around town, to the airport, or even to another city, connect with
                                        verified student drivers in your community. Save money and make friends along the way.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex justify-center lg:justify-end"
                                >
                                    <div className="relative -ml-24 md:ml-0 md:mr-4 lg:mr-8">
                                        <img src={createRideRequestImage} alt="Create Ride Request Screen" className="w-56 md:w-64 animate-float rounded-3xl shadow-uni-lg" />

                                        <div className="absolute -right-24 md:-right-44 top-16">
                                            <img src={requestRideDetailsImage} alt="Create Ride Request Screen" className="w-48 md:w-56 rounded-3xl shadow-uni-lg" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-16 md:py-24 bg-card">
                        <div className="container mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Why Ride with Uni Go?
                                </h3>
                                <p className="text-lg text-muted-foreground">
                                    Everything you need for safe, affordable rides with other students.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {riderFeatures.map((feature, i) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-uni-md transition-all"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                            <feature.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="py-16 md:py-24">
                        <div className="container mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Getting a Ride is Easy
                                </h3>
                                <p className="text-lg text-muted-foreground">
                                    Getting a ride is quick and easy.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                                {riderHowItWorks.map((item, i) => (
                                    <motion.div
                                        key={item.step}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                                            <span className="text-2xl font-bold text-primary">{item.step}</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-16 md:py-24 bg-foreground">
                        <div className="container mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="max-w-2xl mx-auto text-center"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-background mb-4">
                                    Ready to Start Riding?
                                </h3>
                                <p className="text-lg text-background/70 mb-8">
                                    Join our beta program and be among the first to experience affordable student ridesharing.
                                </p>
                                <BetaSignupButton />
                            </motion.div>
                        </div>
                    </section>
                </>
            )}

            {/* Drivers Section */}
            {activeTab === "drivers" && (
                <>
                    {/* Hero Section */}
                    <section className="py-16 md:py-24 relative overflow-hidden">
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
                                >
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                                        Drive &{" "}
                                        <span className="text-gradient-gold">Earn</span>
                                    </h2>

                                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                                        Turn your time into extra income. Drive fellow students to get where they need to go
                                        and make money for it. No hidden fees, no commission.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex justify-center lg:justify-end"
                                >
                                    <div className="relative -ml-24 md:ml-0 md:mr-4 lg:mr-8">
                                        <img src={createRideOfferImage} alt="Create Ride Offer Screen" className="w-56 md:w-64 animate-float rounded-3xl shadow-uni-lg" />

                                        <div className="absolute -right-24 md:-right-44 top-16">
                                            <img src={offerRideDetailsImage} alt="Offer Ride Details Screen" className="w-48 md:w-56 rounded-3xl shadow-uni-lg" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-16 md:py-24 bg-card">
                        <div className="container mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Why Drive with Uni Go?
                                </h3>
                                <p className="text-lg text-muted-foreground">
                                    The best way for students to earn money on their own terms.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {driverFeatures.map((feature, i) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-uni-md transition-all"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                            <feature.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="py-16 md:py-24">
                        <div className="container mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Start Earning in Simple Steps
                                </h3>
                                <p className="text-lg text-muted-foreground">
                                    Start earning in just a few simple steps.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                                {driverHowItWorks.map((item, i) => (
                                    <motion.div
                                        key={item.step}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                                            <span className="text-2xl font-bold text-primary">{item.step}</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-16 md:py-24 bg-foreground">
                        <div className="container mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="max-w-2xl mx-auto text-center"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-background mb-4">
                                    Ready to Start Earning?
                                </h3>
                                <p className="text-lg text-background/70 mb-8">
                                    Join our beta program and be among the first drivers to earn with Uni Go.
                                </p>
                                <BetaSignupButton />
                            </motion.div>
                        </div>
                    </section>
                </>
            )}
        </Layout>
    );
};

export default HowItWorks;
