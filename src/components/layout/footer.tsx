import Link from "next/link";
import Image from "next/image";

export const AppFooter = () => {
    return (
        <footer
            className="sticky border border-top-[1px] border-[#DDDDDD] top-0 z-50 py-[calc(--spacing(6)+2px)] bg-[#888] lg:px-28 md:px-16 px-md  shadow-sm">
            <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between">
            <div className="flex flex-col">
                <Link className="mb-4" href="/">
                    <Image
                        width={160}
                        height={30}
                        src={'/farmnegy-white.PNG'}
                        alt="Farmnegy Logo"
                        priority
                    />
                </Link>
                <div className="mt-lg flex sm:flex-row flex-col sm:gap-2">
                    <ul>
                        <li className="text-white mb-4">Ecosystem</li>
                        <li className="text-white text-sm mb-4">Network</li>
                    </ul>
                    <ul>
                        <li className="text-white text-sm mb-4">Documentation</li>
                        <li className="text-white text-sm mb-4">Community</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="text-right hidden md:block text-white text-sm">Community</div>
                <div className="flex gap-4 mt-2">
                    <div className="w-[56px] h-[56px] rounded-full bg-no-repeat flex justify-center items-center bg-right border border-white">
                    <Image
                        width={24}
                        height={24}
                        src={require('@/assets/icons/discord.svg')}
                        alt="Discord"
                        priority
                    />
                    </div>
                    <div className="w-[56px] h-[56px] rounded-full bg-no-repeat flex justify-center items-center bg-right border border-white">
                    <Image
                        width={24}
                        height={24}
                        src={require('@/assets/icons/x.svg')}
                        alt="X"
                        priority
                    />
                    </div>
                    <div className="w-[56px] h-[56px] rounded-full bg-no-repeat flex justify-center items-center bg-right border border-white">
                    <Image
                        width={24}
                        height={24}
                        src={require('@/assets/icons/youtube.svg')}
                        alt="Youtube"
                        priority
                    />
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-[#e1dcee] mt-8 mb-6 w-full h-[1px]" />
            <nav className="flex sm:flex-row flex-col sm:justify-between sm:items-center">
                <ul className="flex flex-row items-center sm:mb-0 mb-4">
                    <li>
                        <Link
                            href="/app/swap"
                            className="text-white text-sm"
                        >
                            © Farmnegy 2025. All rights reserved.
                        </Link>
                    </li>
                   
                </ul>
                <ul className="flex flex-row items-center">
                    <li>
                        <Link
                            href="/app/dashboard"
                            className="text-white text-sm"
                        >
                            Terms of Use
                        </Link>
                    </li>
                    <li className="text-white text-sm mx-4">
                       |
                    </li>
                    <li>
                        <Link
                            href="/app/portfolio"
                            className="text-white text-sm"
                        >
                            Privacy Notice
                        </Link>
                    </li>
                    
                </ul>
            </nav>
        </footer>

    )
}