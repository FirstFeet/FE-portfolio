'use client'
import React,{useState} from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import b_1 from "../public/assets/images/bussiness/b-1.jpg";
import b_2 from "../public/assets/images/bussiness/b-2.jpg";
import b_3 from "../public/assets/images/bussiness/b-3.jpg";
import b_4 from "../public/assets/images/bussiness/b-4.jpg";
import DomainKnowledge from "./DomainKnowledge";
import { Button } from "@/components/ui/button"
import {responsive} from "@/lib/dataConstants";
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";

const DomainKnowledgeLanding = () => {

  const [selectedDomain,setSelectedDomain] = useState(null)

  var items = [
    {
      id: 1,
      name: "E-Publishing",
      image: b_1,
      head: "E-Publishing",
      description: "E-publishing refers to the digital production and distribution of books, articles, and other written content, typically delivered via online platforms and e-readers. It offers faster, more accessible publication options for authors while providing readers with instant access to content worldwide",
      workFlow:[
        "<b>Manuscript Submission:</b> Authors submit their content in digital format (e.g., Word, PDF).",
        "<b>Content Editing:</b> Editors review, proofread, and format the manuscript for clarity and consistency.",
        "<b>Design & Formatting:</b> Graphic designers create cover designs, and layout specialists format the text for different devices (e.g., e-readers, tablets).",
        "<b>Conversion to Digital Formats:</b> The content is converted to e-publishing formats such as EPUB, MOBI, or PDF.",
        "<b>Metadata Creation:</b> Key information (title, author, keywords, description) is added to aid in searchability and classification.",
        "<b>Digital Rights Management (DRM):</b> Optional step to protect the digital content from unauthorized use or distribution.",
        "<b>Distribution:</b> The final e-book is distributed via online platforms (Amazon Kindle, Apple Books, Google Play Books, etc.).",
        "<b>Marketing & Promotion:</b> Marketing campaigns are initiated to promote the e-book through social media, websites, and email newsletters.",
        "<b>Sales & Reporting:</b> Platforms track sales, royalties, and customer data, which is reported back to the authors/publishers for analysis and payment.",
        "<b>Updates & Revisions:</b> Publishers can make updates to the content post-publication, ensuring it remains current or corrected."
      ]
    },
    {
      id: 2,
      name: "Gaming",
      image: b_3,
      head: "Gaming",
      description: "The slot game domain involves the development of digital or physical slot machines, where players spin reels to match for potential payouts. It's a popular form of entertainment in both online and offline casinos, relying on chance and random number generators to determine outcomes.",
      workFlow:[
        "<b>Game Concept & Design:</b> Brainstorming and creating a concept for new games (e.g., slot machines, table games). Game mechanics, themes, and features are defined (e.g., reels, paylines, bonus rounds for slots; rules for table games). Visual and audio design elements are created, including symbols, backgrounds, and sound effects.",
        "<b>Game Development:</b> Developers code the game using programming languages like C++, JavaScript, or Unity for 3D and 2D games. Integration of Random Number Generator (RNG) for fairness and unpredictability in game outcomes. Testing of game logic, visuals, and audio on multiple platforms (e.g., desktop, mobile, physical machines).",
        "<b>Licensing & Compliance:</b> Obtaining necessary licenses and ensuring the game complies with legal regulations in various jurisdictions. Ensuring responsible gambling practices, such as player protection features and age verification.",
        "<b>Testing & Quality Assurance:</b> Rigorous testing to ensure the game performs well under different conditions, including user interface testing, gameplay testing, and bug fixing. Certification by third-party auditors to ensure randomness and fairness of the game outcomes.",
        "<b>Integration with Casino Platforms:</b> Integration with casino management systems (CMS) for payouts, player accounts, and game data management. Implementation of payment gateways to handle deposits and withdrawals for online platforms. Backend integration for tracking player activity and game performance.",
        "<b>Launch & Distribution:</b> Deploying the game on casino platforms (land-based or online) or physical slot machines. Promotional campaigns to market the game to players through websites, apps, and casino marketing channels.",
        "<b>Player Interaction & Engagement:</b> Players engage with the game in casinos or on online platforms, placing bets and playing rounds. Casino bonuses, loyalty rewards, and incentives are offered to attract and retain players.",
        "<b>Revenue Management:</b> Casinos manage the financial aspect, including revenue from bets, payouts to players, and casino margins. Periodic reports and analysis of game performance, player engagement, and profitability.",
        "<b>Ongoing Maintenance & Updates:</b> Continuous monitoring of game performance, fixing bugs, and updating game features as needed. Adding new content, themes, or seasonal promotions to keep the game engaging over time.",
        "<b>Security & Compliance Monitoring:</b> Regular audits for compliance with regulatory bodies and anti-fraud measures. Monitoring for responsible gambling indicators and implementing player protection features."
      ]
    },
    {
      id: 3,
      name: "E-Wallets",
      image: b_2,
      head: "E-Wallets",
      description: "The e-wallets game domain integrates digital payment solutions into gaming platforms, allowing players to securely store, deposit, and withdraw funds for in-game purchases or betting. This enhances convenience and speed, offering seamless financial transactions in online gaming environments.",
      workFlow:[
        "<b>User Registration & Account Creation:</b> Users download the e-wallet app or access the web platform. Complete identity verification and KYC (Know Your Customer) procedures. Set up security features such as PINs, passwords, or biometric authentication (fingerprint/face ID).",
        "<b>Linking Bank Accounts or Cards:</b> Users link their bank accounts, credit/debit cards, or other payment methods to the e-wallet. Verify the linked account through OTP (One-Time Password) or bank integration for secure access. Option to add funds to the wallet from a bank account or card for future transactions.",
        "<b>Funds Management:</b> Users can check their e-wallet balance and transaction history. Add, transfer, or withdraw funds between the wallet and linked bank accounts. Automatic updates of available balance after each transaction.",
        "<b>Transaction Initiation:</b> Users initiate payments for goods/services, bill payments, or peer-to-peer (P2P) transfers. Select the payment method (wallet balance, linked card, or bank account) during the transaction. Provide recipient details (email, phone number, or merchant ID) for P2P or merchant payments.",
        "<b>Transaction Authorization:</b> Secure transaction approval through multi-factor authentication (MFA) such as OTP, biometric verification, or PIN. Verify available funds and validate the transaction with the payment gateway or banking system. Payment is processed in real-time, with immediate confirmation provided to both sender and recipient.",
        "<b>Payment Confirmation & Notifications:</b> Users receive instant confirmation of successful transactions via app notifications or SMS. Transaction history is updated in the e-wallet, showing completed payments, transfers, and purchases. Generate digital receipts for record-keeping and future reference.",
        "<b>Merchant Integration:</b> E-wallet providers integrate with merchants (online and offline) to accept payments. Provide QR codes, NFC (Near Field Communication), or other methods for contactless payments. Enable merchants to receive instant payment notifications and reconcile transactions.",
        "<b>Security & Fraud Prevention:</b> Implement encryption, tokenization, and fraud detection mechanisms to secure transactions. Monitor for suspicious activity and initiate automatic alerts or transaction blocks if fraud is detected. Provide user options to report fraudulent activity or block their wallet in case of theft or loss.",
        "<b>Loyalty Programs & Rewards:</b> Users earn cashback, points, or rewards on transactions made via the e-wallet. Allow redemption of rewards or discounts during future purchases. Provide personalized offers and loyalty benefits based on user spending patterns.",
        "<b>Compliance & Regulation:</b> Ensure compliance with financial regulations (AML, KYC, PCI-DSS) to maintain trust and legality. Regular audits to ensure adherence to data protection laws and anti-money laundering (AML) policies. Safeguard user data in compliance with regional privacy laws (e.g., GDPR).",
        "<b>Reporting & Analytics:</b> Users can track their spending, transactions, and wallet usage through detailed analytics. E-wallet providers generate reports for financial records, including deposits, withdrawals, and transfers. Insights on transaction trends help businesses and users manage finances more efficiently."
      ]
    },
    {
      id: 4,
      name: "E-commerce",
      image: b_4,
      head: "E-commerce",
      description: "The e-commerce game domain blends online shopping platforms with gaming elements, allowing users to purchase virtual or real-world items through gamified experiences. It enhances user engagement by integrating rewards, challenges, and interactive features within the shopping process.",
      workFlow:[
        "<b>Product Listing & Catalog Management:</b> Merchants add product details (descriptions, images, prices) to the e-commerce platform. Organize products into categories and apply filters for easy customer navigation. Inventory management to track stock levels and update availability in real-time.",
        "<b>Website Development & Design:</b> Build a user-friendly, responsive website or app for desktop and mobile platforms. Design the user interface (UI) for smooth navigation, search functionality, and quick access to products. Implement secure user authentication and account creation features.",
        "<b>Payment Gateway Integration:</b> Integrate various payment methods (credit cards, e-wallets, net banking) for smooth transactions. Implement secure payment gateways with encryption (SSL, PCI-DSS compliance) to protect customer data. Provide multiple payment options, including buy now, pay later (BNPL) services.",
        "<b>Order Placement & Shopping Cart:</b> Customers add products to their virtual shopping carts. Implement cart and checkout processes with an easy-to-navigate flow. Allow customers to review their orders, apply discounts, and confirm purchases.",
        "<b>Order Fulfillment & Inventory Management:</b> Once an order is placed, update inventory levels in real-time. Route the order to warehouses or vendors for fulfillment. Send order confirmations to customers via email or app notifications.",
        "<b>Shipping & Logistics:</b> Partner with logistics companies for shipping and delivery. Provide customers with multiple delivery options (standard, express). Enable order tracking and shipment notifications to keep customers informed.",
        "<b>Customer Support & Communication:</b> Offer customer service through chatbots, email, or phone for order issues or queries. Send order updates, shipping confirmations, and post-purchase emails for engagement. Address customer complaints or refund requests in a timely manner.",
        "<b>Marketing & Promotion:</b> Implement digital marketing strategies (SEO, PPC, social media, email marketing). Run targeted promotions, discounts, and loyalty programs to attract and retain customers. Use personalized recommendations based on browsing and purchasing history.",
        "<b>Analytics & Reporting:</b> Track website traffic, conversion rates, and customer behavior through analytics tools. Monitor sales performance, stock levels, and user engagement to optimize the platform. Generate sales reports and analyze customer data for insights and future strategies.",
        "<b>Security & Compliance:</b> Ensure compliance with local and international regulations (GDPR, tax laws). Implement fraud detection systems to protect against fraudulent transactions. Regularly update security measures to safeguard customer data and maintain trust.",
        "<b>Returns & Refund Management:</b> Facilitate easy product returns or exchanges as per the return policy. Automate the refund process to credit customer accounts or payment methods quickly. Keep customers informed about the return and refund status."
      ]
    },
  ];



  function itemSelected(item:any): void {
    document.body.style.overflow = 'hidden';
    setSelectedDomain(item)
  }
  function itemRemoved(item:any): void {
    document.body.style.overflow = 'auto';
    setSelectedDomain(null)
  }
  return (
    <section className="py-20">
      <div className="container relative max-w-full">
          <div className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-10 absolute w-full">
              <div>
                <h1 className=" md:text-[40px] py-1 md:py-3 text-2xl font-semibold text-gray-800 w-[400px] ">
                  Knowledge on 
                </h1>
                <h1 className="md:text-[40px] text-2xl font-semibold text-gray-800 w-[400px]">
                  bussiness Domains.
                </h1>
              </div>
              <div>
                <p className="text-gray-600 w-[375px] md:w-[400px] py-2 font-normal text-base">
                Grasping business knowledge enables technical developers to thoroughly explore client requirements, allowing them to provide improved service throughout the process.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={false}
                showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={3000}
                autoPlay={true}
                keyBoardControl={true}
                customTransition="all 1.5s"
                transitionDuration={500}
                containerClass="carousel-container-knowledge"
                removeArrowOnDeviceType={["mobile"]}
                dotListClass="custom-dot-list-style"
                // partialVisible={false}
                itemClass="carousel-item"
                customLeftArrow={
                  <AiFillLeftSquare
                    className="absolute top-2/3 left-0 max-w-6 cursor-pointer text-blue-500 text-4xl"
                  />
                }
                customRightArrow={
                  <AiFillRightSquare
                    className="absolute top-2/3 right-0 max-w-6 cursor-pointer text-blue-500 text-4xl"
                  />
                }
              >
                {items.map((item, index) => {

                  return (
                    <div
                      key={index}
                      className="min-h-[100%] bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center"
                    >
                      <div className="relative">
                        <div className="w-full h-[280px]">
                          <Image
                            className="rounded-t-lg h-full w-full object-cover"
                            src={item.image}
                            alt="Not found"
                          />
                        </div>
                        <p className="text-white bg-gray-800 rounded-full py-1 md:px-5 px-3 absolute md:top-7 top-2 right-1 text-xs md:text-lg md:right-5 w-fit lowercase md:uppercase">
                          {item.head}
                        </p>
                      </div>
                      <div className="p-5">
                        {/* <a href="#">
                          <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 text-center ">
                            {item.name}
                          </h5>
                        </a> */}
                        <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-sm">
                            {item.description}
                        </p>

                        <div className="items-center w-full justify-center flex flex-col mt-5">
                          <Button onClick={() => itemSelected(item)} 
                            className="inline-flex  px-3 py-2 text-xs lowercase md:text-sm md:uppercase font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                          >
                            EXPLORE More
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 md:mt-1 mt:0.5 ml-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            {selectedDomain !== null &&  
              <>
                  <DomainKnowledge selectedDomain={selectedDomain} itemRemoved={itemRemoved}/>

              </>
            }
          </div>
      </div>
    </section>
  );
};

export default DomainKnowledgeLanding;
