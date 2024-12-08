export default function Frame() {
  return (
    <div className={`flex w-full px-4 py-8 lg:px-[104px] lg:py-[22px] space-x-11 pt-32`}>
      <div className="font-inter flex flex-grow flex-wrap items-start justify-center gap-x-8 gap-y-8 pb-32 pr-14 tracking-[0px] sm:flex-nowrap">
        <div className="self-stretch w-full lg:w-full">
          <div className="w-14 text-[22px] font-medium leading-[33px] text-neutral-950">
            Bag
          </div>
          <div className="flex items-center bg-transparent py-6 pr-[70px] shadow-inner">
            <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-3 pb-1.5 lg:gap-x-[96px] sm:flex-nowrap">
              <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-8 sm:flex-nowrap">
                <img
                  className="h-36 w-36 flex-shrink-0 object-cover object-center"
                  src="/img/item1.png"
                  loading="lazy"
                />
                <div className="text-sm">
                  <div>Library Stool Chair</div>
                  <div>
                    <p>Ashen Slate</p>
                    <p>Cobalt Bliss</p>
                  </div>
                  <div>
                    <p>Size: Medium</p>
                    <p>Quantity: 1</p>
                  </div>
                </div>
              </div>
              <div className="text-[15px] leading-7 text-neutral-950">
                MRP: $99
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end pt-[7px]">
            <div className="w-full flex items-center bg-transparent py-6 pr-[70px] shadow-inner">
              <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-3 pb-1.5 lg:gap-x-[96px] sm:flex-nowrap">
                <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-8 sm:flex-nowrap">
                  <img
                    className="h-36 w-36 flex-shrink-0 object-cover object-center"
                    src="/img/top1.png"
                    loading="lazy"
                  />
                  <div className="text-sm">
                    <div>Library Stool Chair</div>
                    <div>
                      <p>Ashen Slate</p>
                      <p>Cobalt Bliss</p>
                    </div>
                    <div>
                      <p>Size: Medium</p>
                      <p>Quantity: 1</p>
                    </div>
                  </div>
                </div>
                <div className="text-[15px] leading-7 text-neutral-950">
                  MRP: $99
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-[5px] w-full lg:w-auto">
          <div className="flex flex-col items-start gap-y-2 text-neutral-950">
            <div className="text-[21px] w-full font-medium leading-[33px]">
              Summary
            </div>
            <div className="flex flex-wrap items-end justify-center gap-x-8 gap-y-3 pr-[9.4px] pt-[17px] sm:flex-nowrap">
              <div className="flex items-center justify-center gap-x-2">
                <div className="text-[15px] leading-7">Subtotal</div>
                <div className="h-7 w-3 flex-shrink-0 bg-white"></div>
              </div>
              <div className="text-sm font-medium leading-6">$198.00</div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3.5 pr-1.5 text-[15px] leading-7 sm:flex-nowrap">
              <div>Estimated Delivery & Handling</div>
              <div>Free</div>
            </div>
            <div className="flex flex-col items-center justify-end pt-3">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y border-solid border-neutral-200 py-4 pr-[4.4px] text-sm sm:flex-nowrap">
                <div className="leading-7">Total</div>
                <div className="font-medium leading-6">$198.00</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end pr-[5.7px] pt-6">
              <div className="rounded-[30px] bg-[#1eabb0] px-12 py-[18px] text-center text-[15px] font-medium leading-6 text-white">
                Member Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

