export default function HotCategory() {
    return (
      <div className={`flex w-full flex-col items-end `}>
        <div className="flex w-full flex-grow flex-wrap items-center justify-center min-[1310px]:flex-nowrap" >
          <div className="relative h-[648px] w-[52px] flex-shrink-0">
            <div className="font-roboto absolute left-0 top-[648px] flex h-[52px] w-[648px] origin-top-left items-start justify-center text-center text-[34px] uppercase leading-[normal] tracking-[0px] [transform:rotate(-90deg)]" >
              <p>Explore new and popular styles</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-0 self-stretch min-[1310px]:flex-nowrap" >
            <img
              className="md:h-[648px] h-[324px] md:w-[648px] w-[324px] flex-shrink-0 object-cover object-center"
              src="/img/item1.png"
              loading="lazy"
             />
            <div className="flex flex-col gap-y-6 self-stretch justify-center  ">
              <img
                className="md:h-[312] h-[100]  md:w-[312] w-[100] flex-shrink-0 object-cover object-center"
                src="/img/item2.png"
                loading="lazy"
               />
              <img
                className="md:h-[312] h-[100]  md:w-[312] w-[100] flex-shrink-0 object-cover object-center"
                src="/img/item4.png"
                loading="lazy"
               />
            </div>
            <div className="flex flex-col gap-y-6 self-stretch justify-center ">
              <img
                className="md:h-[312] h-[100]  md:w-[312] w-[100]  flex-shrink-0 object-cover object-center"
                src="/img/item3.png"
                loading="lazy"
               />
              <img
                className="md:h-[312] h-[100]  md:w-[312] w-[100] flex-shrink-0 object-cover object-center"
                src="/img/item5.png"
                loading="lazy"
               />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
 