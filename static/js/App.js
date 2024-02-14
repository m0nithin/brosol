import logo from "./logo.svg";
import "./App.css";

function App() {
    const test = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return ( <
        section className = "relative" >
        <
        main className = "relative z-10 flex min-h-screen flex-col items-center justify-between" >
        <
        header className = "flex justify-between items-center w-full px-2 sm:px-6 bg-white" >
        <
        div className = "flex gap-x-2 justify-between items-center" >
        <
        img className = "h-14 sm:h-24 w-24 sm:w-52 object-contain"
        src = "/assets/BROWebsite/BROElements/Logo.png"
        alt = "logo" /
        > { /* <p className='text-xl NittiBold'>$BRO</p> */ } <
        /div> <
        div className = "flex gap-x-1 sm:gap-x-4 justify-between items-center" >
        <
        a href = "https://twitter.com/Broccolicoineth"
        className = "" >
        <
        img className = "h-5 w-5 sm:h-9 sm:w-9 object-contain"
        src = "/assets/BROWebsite/BROElements/Twitter.png"
        alt = "logo" /
        >
        <
        /a>

        <
        a href = "https://t.me/broccolicoineth"
        className = "" >
        <
        img className = "h-5 w-5 sm:h-9 sm:w-9 object-contain"
        src = "/assets/BROWebsite/BROElements/Telegram.png"
        alt = "logo" /
        >
        <
        /a> <
        a href = "https://app.uniswap.org/#/swap"
        className = "" >
        <
        img className = "h-5 w-5 sm:h-9 sm:w-9 object-contain"
        src = "/assets/BROWebsite/BROElements/Uniswap.png"
        alt = "logo" /
        >
        <
        /a> <
        a href = "https://www.dextools.io/app/en/ether/pair-explorer/0xd3d9de798f708b5360adc2292a23a36fbdc6ab4a"
        className = "" >
        <
        img className = "h-5 w-5 sm:h-9 sm:w-9 object-contain"
        src = "/assets/BROWebsite/BROElements/Dextool.png"
        alt = "logo" /
        >
        <
        /a> <
        a href = "https://etherscan.io/token/0x7f3e4dbd84f5c8a5f15ef927557748cf2fbb77af"
        className = "" >
        <
        img className = "h-5 w-5 sm:h-9 sm:w-9 object-contain"
        src = "/assets/BROWebsite/BROElements/Etherscan.png"
        alt = "logo" /
        >
        <
        /a> <
        a href = "https://app.uniswap.org/#/swap"
        className = "" >
        <
        img className = "h-8 sm:h-14 w-16 sm:w-36 object-contain"
        src = "/assets/BROWebsite/BROElements/button.svg"
        alt = "logo" /
        >
        <
        /a> <
        /div> <
        /header> { /* hero section */ } <
        div className = "relative w-full" >
        <
        div className = "relative w-full z-10 pt-20" >
        <
        div className = "flex flex-col sm:flex-row justify-between items-center w-full sm:max-w-6xl mx-auto h-[30rem]" >
        <
        div style = {
            {
                fontFamily: "Nitti-Normal",
            }
        }
        className = " flex flex-col justify-center sm:justify-start items-center sm:items-start space-y-2 " >
        <
        div className = "w-full flex justify-end " >
        <
        img className = "dollar h-6 w-6 object-contain"
        src = "/assets/BROWebsite/BROElements/HeaderIMG/Star.png"
        alt = "logo" /
        >
        <
        /div>

        <
        p className = " text-2xl sm:text-5xl font-extrabold text-white uppercase" >
        $Broccoli <
        /p> <
        p className = "text-2xl sm:text-5xl font-extrabold text-white uppercase" >
        Ticker $BRO <
        /p> <
        p className = "text-white text-sm sm:text-base" >
        Some eat their greens, <
        /p> <
        p className = "text-white text-sm sm:text-base" >
        others get green <
        /p> <
        a href = "https://app.uniswap.org/#/swap"
        className = "flex justify-center sm:justify-start items-center sm:items-start"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img className = "h-10 sm:h-16 w-28 sm:w-48 object-contain transition-all hover:scale-105"
        src = "/assets/BROWebsite/BROElements/button_shadow.svg"
        alt = "logo" /
        >
        <
        /a> <
        /div> <
        div className = "w-full flex-1 relative" >
        <
        div className = "w-full space-y-8 relative z-0" >
        <
        div className = "w-full flex justify-start " >
        <
        img className = " sm:ml-28 h-10 sm:h-20 w-16 sm:w-28 object-contain"
        src = "/assets/BROWebsite/BROElements/HeaderIMG/Moon.png"
        alt = "logo" /
        >
        <
        /div> <
        div className = "w-full flex justify-end " >
        <
        img className = "h-10 sm:h-16 w-28 sm:w-48 object-contain"
        src = "/assets/BROWebsite/BROElements/HeaderIMG/dollar.png"
        alt = "logo" /
        >
        <
        /div> <
        div className = "w-full flex justify-between items-center " >
        <
        img className = " h-10 sm:h-16 w-28 sm:w-48 object-contain"
        src = "/assets/BROWebsite/BROElements/HeaderIMG/dollar.png"
        alt = "logo" /
        >
        <
        img className = "  sm:mr-20 h-10 sm:h-16 w-28 sm:w-48 object-contain"
        src = "/assets/BROWebsite/BROElements/HeaderIMG/dollar.png"
        alt = "logo" /
        >
        <
        /div> <
        div className = "w-full flex justify-start " >
        <
        img className = "dollar h-6 w-6 object-contain"
        src = "/assets/BROWebsite/BROElements/HeaderIMG/Star.png"
        alt = "logo" /
        >
        <
        img className = "sm:ml-44 h-10 sm:h-16 w-28 sm:w-48 object-contain"
        src = "/assets/BROWebsite/BROElements/HeaderIMG/dollar.png"
        alt = "logo" /
        >
        <
        /div> <
        /div> <
        div className = "w-full h-full flex flex-col justify-center items-center absolute z-10 inset-0  " >
        <
        img className = " brocolli h-32 sm:h-52 w-32 sm:w-52 object-contain"
        src = "/assets/BROWebsite/BROElements/HeaderIMG/broccoli1.png"
        alt = "logo" /
        >
        <
        img className = "mt-4 h-8 w-52 object-contain"
        src = "/assets/BROWebsite/BROElements/HeaderIMG/Broccolishadow.png"
        alt = "logo" /
        >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "h-full w-full absolute z-0 inset-0" >
        <
        div className = "h-full w-full relative" >
        <
        img className = "relative z-0 h-full w-full object-fill"
        src = "/assets/BROWebsite/BROElements/night_sky_background.png"
        alt = "logo" /
        >
        <
        div className = "absolute inset-0 z-10 h-full w-full bg-black bg-opacity-20" > < /div> <
        /div> <
        /div> <
        /div> <
        div className = "relative w-full" >
        <
        div className = "relative w-full z-10 pt-20" >
        <
        div className = "flex flex-col space-y-8 sm:space-y-12 justify-center items-center h-[30rem] " >
        <
        div className = "flex flex-col justify-center items-center " >
        <
        p style = {
            {
                fontFamily: "Nitti-Bold",
            }
        }
        className = " text-3xl sm:text-7xl text-green-400 uppercase font-[1000]" >
        $Bro <
        /p> <
        p className = "text-white text-sm sm:text-2xl " > tokenomics < /p> <
        /div> <
        div className = "flex px-14  sm:px-0 flex-wrap flex-row gap-4 sm:gap-8 justify-between items-center" >
        <
        div className = "flex flex-col justify-center items-center " >
        <
        p className = "text-xl sm:text-4xl   text-green-400" > 42.5 % < /p> <
        p className = "text-white text-xs sm:text-base" > presale < /p> <
        /div> <
        div className = "flex flex-col justify-center items-center " >
        <
        p className = "text-xl sm:text-4xl   text-green-400" > 40 % < /p> <
        p className = "text-white text-xs sm:text-base" > lp < /p> <
        /div> <
        div className = "flex flex-col justify-center items-center " >
        <
        p className = "text-xl sm:text-4xl   text-green-400" > 7.5 % < /p> <
        p className = "text-white text-xs sm:text-base" > team < /p> <
        /div> <
        div className = "flex flex-col justify-center items-center " >
        <
        p className = "text-xl sm:text-4xl   text-green-400" > 7.5 % < /p> <
        p className = "text-white text-xs sm:text-base" > marketing < /p> <
        /div> <
        div className = "flex flex-col justify-center items-center " >
        <
        p className = "text-xl sm:text-4xl   text-green-400" > 2.5 % < /p> <
        p className = "text-white text-xs sm:text-base" > airdrop < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "h-full w-full absolute z-0 inset-0" >
        <
        div className = "h-full w-full relative" >
        <
        img className = "relative z-0 h-full w-full object-fill"
        src = "/assets/BROWebsite/BROElements/Tokenomics_back.png"
        alt = "logo" /
        >
        <
        div className = "absolute inset-0 z-10 h-full w-full bg-black bg-opacity-20" > < /div> <
        /div> <
        /div> <
        /div> <
        div className = "relative w-full" >
        <
        div className = "relative z-10 flex flex-col gap-y-4 justify-center items-center h-[30rem] w-full" >
        <
        img className = "h-24 sm:h-40 w-24 sm:w-40 object-contain"
        src = "/assets/BROWebsite/BROElements/Logo_vertical.png"
        alt = "logo" /
        >
        <
        div className = "flex gap-x-4 justify-between items-center" >
        <
        a href = "https://twitter.com/Broccolicoineth"
        className = "" >
        <
        img className = "h-5 w-5 sm:h-9 sm:w-9 object-contain"
        src = "/assets/BROWebsite/BROElements/White Icons/Twitter.png"
        alt = "logo" /
        >
        <
        /a>

        <
        a href = "https://t.me/broccolicoineth"
        className = "" >
        <
        img className = "h-5 w-5 sm:h-9 sm:w-9 object-contain"
        src = "/assets/BROWebsite/BROElements/White Icons/Telegram.png"
        alt = "logo" /
        >
        <
        /a> <
        a href = "https://app.uniswap.org/#/swap"
        className = "" >
        <
        img className = "h-5 w-5 sm:h-9 sm:w-9 object-contain"
        src = "/assets/BROWebsite/BROElements/White Icons/Uniswap.png"
        alt = "logo" /
        >
        <
        /a> <
        a href = "https://www.dextools.io/app/en/ether/pair-explorer/0xd3d9de798f708b5360adc2292a23a36fbdc6ab4a"
        className = "" >
        <
        img className = "h-5 w-5 sm:h-9 sm:w-9 object-contain"
        src = "/assets/BROWebsite/BROElements/White Icons/Dextool.png"
        alt = "logo" /
        >
        <
        /a> <
        a href = "https://etherscan.io/token/0x7f3e4dbd84f5c8a5f15ef927557748cf2fbb77af"
        className = "" >
        <
        img className = "h-5 w-5 sm:h-9 sm:w-9 object-contain"
        src = "/assets/BROWebsite/BROElements/White Icons/Bitmap.png"
        alt = "logo" /
        >
        <
        /a> <
        /div> <
        p className = "text-white text-center whitespace-normal text-xs sm:text-base px-4 sm:px-0" >
        ca: 0x7F3E4DbD84f5c8a5f15EF927557748cf2FBB77af <
        /p> <
        /div> <
        div className = "h-full w-full absolute z-0 inset-0" >
        <
        div className = "h-full w-full relative" >
        <
        img className = "relative z-0 h-full w-full object-fill"
        src = "/assets/BROWebsite/BROElements/BackgroundColour.png"
        alt = "logo" /
        >
        <
        div className = "absolute inset-0 z-10 h-full w-full bg-black bg-opacity-20" > < /div> <
        /div> <
        /div> <
        /div>

        <
        footer className = "p-6 border-t border-green-400 w-full bg-[#261D2F] " >
        <
        div className = "flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:px-20 text-white" >
        <
        div onClick = {
            () => test()
        }
        className = "cursor-pointer flex justify-center items-center gap-x-2" >
        <
        p className = "text-xs sm:text-base uppercase" > back to top < /p> <
        img className = "h-6 w-5 object-contain"
        src = "/assets/BROWebsite/BROElements/Backtotop.svg"
        alt = "logo" /
        >
        <
        /div> <
        div className = "sm:pr-32 flex-1 flex flex-col justify-center items-center text-xs sm:text-base" >
        <
        p > & copy; 2023 by $Bro < /p> <
        p > All rights reserved! < /p> <
        /div> <
        /div> <
        /footer> <
        /main> <
        /section>
    );
}

export default App;