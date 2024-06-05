
export default function Home() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center "> 
            <div ><img className="h-[300px] mt-4 rounded-2xl" src="/img/sami.jpg"/></div>
                <div className="text-right">
                    <h1 className="font-bold text-[32px]">Download Now</h1>
                    <p className="font-bold">Lorem ispm</p>
                    <button className="bg-orange-500 text-white px-4 py-1 rounded-lg mt-4">Download Now</button>
                </div>
                </div>
            <div><img className="h-[300px] mt-4 rounded-2xl mx-auto" src="/img/guria.jpg"/></div>
        
        </>
    );
}
