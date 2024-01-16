import Navbar from "../navbar/Navbar";

const Home = () => {
    return (
        <>
            <section className="flex gap-7 maxLg:flex-wrap">
                <div className="w-[70%]">
                <div className="flex justify-between pr-16">
                    <div>
                        <Navbar />
                    </div>
                    <div className="text-right mt-14">
                        <h2 className="text-2xl font-medium">Design. Content. Delivered.</h2>
                        <p className="text-xl py-5">Your solution to your <br /> unlimited design and content needs.</p>
                        <button className="btn-primary">see plans</button>
                    </div>
                </div>
                <div className="bg-[#F0EBE6] w-[100%] rounded-[10px]">
                    <ul className="data-lists">
                        <li>branding</li>
                        <li>blog posts</li>
                        <li>packaging</li>
                        <li>stationery</li>
                        <li>web apps</li>
                        <li>landing pages</li>
                        <li>emails</li>
                        <li>product descriptions</li>
                        <li>posters/covers</li>
                        <li>newsletters</li>
                        <li>Sales Funnels</li>
                        <li>ad Creatives</li>
                        <li>SEO</li>
                        <li>social media</li>
                        <li>ghost writing</li>
                        <li>Mobile Apps</li>
                        <li>ebooks</li>
                        <li>Websites</li>
                        <li>product pages</li>
                        <li>and more...</li>
                    </ul>
                </div>
                </div>
                <div className="w-[30%] mt-14">

                    <div className="details-card">
                        <ul>
                            <li>One Subscription for all your needs</li>
                            <li>Unlimited Design and content Requests</li>
                            <li>Average 2-5 day delivery</li>
                            <li>Pause or Cancel anytime</li>
                            <li>1: 1 async communication</li>
                            <li>No hiring required</li>
                            <li>No Contracts</li>
                            <li>No Meetings</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="mt-14">
                <h2 className="title">how it works</h2>
                <div className="how-works">
                    <div>
                        <h2>subscribe</h2>
                        <p>Select your ideal plan. Start hassle-free, no strings attached..</p>
                        <span>1</span>
                    </div>
                    <div>
                    <h2>list tasks</h2>
                        <p>Tell us what you need; we'll handle the rest. Pour out all your design needs.</p>
                        <span>2</span>
                    </div>
                    <div>
                    <h2>revise</h2>
                        <p>Enjoy the freedom of unlimited revisions, ensuring each detail aligns with your vision.</p>
                        <span>3</span>
                    </div>
                    <div>
                    <h2>get <br/> delivery</h2>
                        <p>Receive designs within 2-5 days or less ensuring your satisfaction with every delivery.</p>
                        <span>4</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;