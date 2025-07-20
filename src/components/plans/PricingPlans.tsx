import React from 'react'
import { StarterPlan, BusinessPlan, PremiumPlan, Images } from '../../content/plans/data'

const PricingPlans = () => {
    return (
        <section className={`${Images.backgroundImage} bg-cover bg-center bg-no-repeat py-16 px-4 md:px-8 lg:px-20`} id="Plans">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Plans & Pricing</h2>
                <p className="text-blue-950 font-extrabold max-w-2xl mx-auto">
                    Choose a website development plan that suits your business needs and budget.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* Starter Plan */}
                <div className="bg-white/35 shadow-xl rounded-2xl p-8 border border-indigo-200 hover:scale-105 transition-transform duration-300
                cursor-pointer">
                    <h3 className="text-xl font-semibold text-indigo-600">{StarterPlan.title}</h3>
                    <p className="text-3xl font-bold my-4">{StarterPlan.price}</p>
                    <ul className="text-gray-700 space-y-3 mb-6">
                        {StarterPlan.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-black mr-2"> {feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
                        Get Started
                    </button>
                </div>

                {/* Business Plan */}
                <div className="bg-indigo-600/55 text-white shadow-2xl rounded-2xl p-8 transform scale-105 cursor-pointer">
                    <h3 className="text-xl font-semibold">{BusinessPlan.title}</h3>
                    <p className="text-3xl font-bold my-4">{BusinessPlan.price}</p>
                    <ul className="space-y-3 mb-6">
                        {BusinessPlan.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-white mr-2"> {feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full bg-white text-indigo-600 hover:bg-gray-200 py-2 rounded-lg font-semibold">
                        Most Popular
                    </button>
                </div>

                {/* Premium Plan */}
                <div className="bg-white/35 shadow-xl rounded-2xl p-8 border border-indigo-200 hover:scale-105 transition-transform duration-300
                cursor-pointer">
                    <h3 className="text-xl font-semibold text-indigo-600">{PremiumPlan.title}</h3>
                    <p className="text-3xl font-bold my-4">{PremiumPlan.price}</p>
                    <ul className="text-gray-700 space-y-3 mb-6">
                        {PremiumPlan.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-black mr-2"> {feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
                        Contact Us
                    </button>
                </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
                Note: Prices may vary based on specific client requirements.
            </p>
        </section>
    )
}

export default PricingPlans