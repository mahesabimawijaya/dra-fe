"use client";

import { useEffect } from "react";
import { Button } from "../ui/button";
import { loadSnapScript, toRupiah } from "@/service/helper";
import { toast } from "sonner";
import api from "@/service/axios";
import { useUserStore } from "@/store/auth";

export default function PricingSection() {
  const { user } = useUserStore();

  useEffect(() => {
    loadSnapScript(() => console.log("Snap script loaded"));
  }, []);

  const handlePayment = async () => {
    try {
      const { data } = await api.post("/payment", {
        id: user?.id,
        email: user?.email,
        name: user?.name,
        phone: user?.phone,
      });

      if (window.snap) {
        window.snap.pay(data.data.token, {
          onSuccess: function () {
            toast.success("Payment Success", {
              description: "Your payment has been successfully processed.",
            });
          },
          onPending: function () {},
          onError: function () {
            toast.error("Payment Failed", {
              description: "Your payment has failed. Please try again.",
            });
          },
          onClose: function () {
            alert("you closed the popup without finishing the payment");
          },
        });
      } else {
        console.log("Snap is not loaded yet");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      toast.error("Payment Error", {
        description: "An error occurred while processing your payment.",
      });
    }
  };

  return (
    <section id="pricing" className="bg-white dark:bg-[#0A0A0A]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Join the celebration</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Your ticket helps us cover the venue, food, entertainment, and all the little touches that will make this reunion unforgettable. Choose the package that works for you — whether you&apos;re
            coming solo or bringing a plus one. Every ticket includes dinner, entertainment, and a night full of nostalgia!
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Access Ticket</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">{toRupiah(250000)}</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>
                  Team size: <span className="font-semibold">10 developers</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>
                  Premium support: <span className="font-semibold">24 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>
                  Free updates: <span className="font-semibold">24 months</span>
                </span>
              </li>
            </ul>
            <Button onClick={handlePayment} className="cursor-pointer">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
