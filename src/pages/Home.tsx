import React from 'react'
import { Button } from '@/components/ui/button'
import {
    ChevronRight,
    QrCode,
    Map,
    Car,
    Zap,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ParkingHeroImage from '@/assets/home/SmartParkingHero.jpeg'
import { Card } from '@/components/ui/card'
import { useAuth } from '@/context/AuthContext'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
    const navigate = useNavigate()
    const { isAuthenticated, user } = useAuth()

    // Animation variants (can be kept as they are)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    }

    return (
        <>
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/* Hero Section */}
                <section
                    id="hero-section"
                    className="relative overflow-hidden bg-gradient-to-r from-slate-50 to-slate-100"
                >
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
                            <motion.div
                                className="max-w-2xl space-y-7"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* --- CHANGE: Updated marketing tagline --- */}
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 mb-4 animate-pulse">
                                    <span className="text-xs font-medium">
                                        ✨ Welcome to SpotLinkIO - The Future of Parking
                                    </span>
                                </div>
                                {/* --- CHANGE: Updated H1 and paragraph text based on auth state --- */}
                                <h1 className="text-blue-600 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    {isAuthenticated
                                        ? `Welcome back${user?.firstname ? ', ' + user.firstname : ''}!`
                                        : 'Seamless Parking, Simplified.'}
                                </h1>
                                <p className="text-lg md:text-lg text-blue-900">
                                    {isAuthenticated
                                        ? 'Ready to park? Your unique entry QR code is waiting for you in your dashboard.'
                                        : 'Join SpotLinkIO to find, enter, and pay for parking effortlessly. No more circling for a spot.'}
                                </p>

                                {/* --- CHANGE: Updated buttons and navigation links --- */}
                                {isAuthenticated ? (
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            className="text-base py-6 px-8 transition-all duration-300"
                                            onClick={() =>
                                                navigate('/dashboard') // Navigate to user dashboard
                                            }
                                        >
                                            Go to Dashboard{' '}
                                            <ChevronRight className="ml-2 h-5 w-5" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="text-base py-6 px-8 hover:bg-blue-50 transition-all duration-300"
                                            onClick={() =>
                                                navigate('/profile') // Navigate to user profile
                                            }
                                        >
                                            My Profile
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            className="text-base py-6 px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
                                            onClick={() =>
                                                navigate('/auth/signup')
                                            }
                                        >
                                            Get Started{' '}
                                            <ChevronRight className="ml-2 h-5 w-5" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="text-base py-6 px-8 hover:bg-blue-50 transition-all duration-300"
                                            onClick={() =>
                                                navigate('/auth/login')
                                            }
                                        >
                                            Sign In
                                        </Button>
                                    </div>
                                )}
                            </motion.div>

                            {/* --- CHANGE: Updated hero image --- */}
                            <motion.div
                                className="relative flex items-center justify-center"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="relative hidden md:flex items-center justify-center max-w-lg">
                                    <div className="absolute -z-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70"></div>
                                    <div className="w-5/6 h-5/6 flex items-center justify-center">
                                        <img
                                            src={ParkingHeroImage}
                                            alt="SpotLinkIO Smart Parking"
                                            className="max-w-full h-auto relative z-10 drop-shadow-2xl"
                                        />
                                    </div>
                                    <div className="absolute top-1/4 -left-5 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-float"></div>
                                    <div className="absolute bottom-1/3 -right-3 w-8 h-8 bg-purple-400 rounded-full opacity-30 animate-float animation-delay-2000"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* --- CHANGE: Updated section heading --- */}
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why SpotLinkIO?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We use IoT technology to transform the parking experience,
                                making it faster, simpler, and more secure for everyone.
                            </p>
                        </motion.div>

                        {/* --- CHANGE: Updated feature cards with relevant icons and text --- */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: QrCode,
                                    title: 'QR Code Entry',
                                    description: 'Scan your unique QR code for quick, touchless gate access.',
                                    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-50',
                                    textColor: 'text-blue-600',
                                },
                                {
                                    icon: Map,
                                    title: 'Live Spot Guidance',
                                    description: 'Get assigned a spot instantly and navigate right to it with our in-app map.',
                                    bgColor: 'bg-gradient-to-br from-cyan-100 to-cyan-50',
                                    textColor: 'text-cyan-600',
                                },
                                {
                                    icon: Car,
                                    title: '99% Availability',
                                    description: 'Our system only lets you in if a spot is confirmed to be available for you.',
                                    bgColor: 'bg-gradient-to-br from-purple-100 to-purple-50',
                                    textColor: 'text-purple-600',
                                },
                                {
                                    icon: Zap,
                                    title: 'Effortless Payments',
                                    description: 'Pay directly in the app and exit seamlessly. No tickets, no machines.',
                                    bgColor: 'bg-gradient-to-br from-teal-100 to-teal-50',
                                    textColor: 'text-teal-600',
                                },
                            ].map((feature, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <Card className="relative overflow-hidden border-0 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                        <div className="p-6 flex flex-col items-center text-center space-y-4">
                                            <div
                                                className={`w-16 h-16 rounded-full ${feature.bgColor} flex items-center justify-center mx-auto transform transition-transform duration-500 group-hover:scale-110 relative`}
                                            >
                                                <feature.icon
                                                    className={`w-8 h-8 ${feature.textColor} group-hover:scale-125 transition-transform duration-500`}
                                                />
                                                <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-200 group-hover:scale-110 transition-all duration-500"></span>
                                            </div>
                                            <h3 className="text-xl font-semibold">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home