export default function TopCategories() {
    return (
      <div
        className={`font-inter flex w-full flex-col items-start gap-y-11 pt-[4.5px] capitalize leading-[1.1] tracking-[0px] py-20 md:px-24 px-5`}
      >
        <div className="text-[32px] font-semibold leading-[1.1] text-indigo-950">
          Top categories
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-white">
          {/* Category 1 */}
          <div
            className="h-[300px] md:h-[424px] w-[300px] md:w-[424px] rounded-[10px] flex flex-col items-center justify-end bg-cover bg-center"
            style={{
              backgroundImage: "url(/img/top1.png)",
              backgroundSize: "100% 100%",
              backgroundPosition: "0px 0px",
            }}
          >
            <div className="bg-black/70 w-full p-3 rounded-b-[10px]">
              <div className="text-xl font-bold">Wing Chair</div>
              <div className="text-sm">3,584 Products</div>
            </div>
          </div>
  
          {/* Category 2 */}
          <div
            className="h-[300px] md:h-[424px] w-[300px] md:w-[424px] rounded-[10px] flex flex-col items-center justify-end bg-cover bg-center"
            style={{
              backgroundImage: "url(/img/top2.png)",
              backgroundSize: "100% 100%",
              backgroundPosition: "0px 0px",
            }}
          >
            <div className="bg-black/70 w-full p-3 rounded-b-[10px]">
              <div className="text-xl font-bold">Wooden Chair</div>
              <div className="text-sm">157 Products</div>
            </div>
          </div>
  
          {/* Category 3 */}
          <div
            className="h-[300px] md:h-[424px] w-[300px] md:w-[424px] rounded-[10px] flex flex-col items-center justify-end bg-cover bg-center"
            style={{
              backgroundImage: "url(/img/top3.png)",
              backgroundSize: "100% 100%",
              backgroundPosition: "0px 0px",
            }}
          >
            <div className="bg-black/70 w-full p-3 rounded-b-[10px]">
              <div className="text-xl font-bold">Desk Chair</div>
              <div className="text-sm">154 Products</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
