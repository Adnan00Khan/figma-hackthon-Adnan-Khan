import Image from "next/image";
import Link from "next/link";
export default function FeaturedProducts() {
    return (
      <div
        className={`font-inter flex w-full flex-col items-start gap-y-11 space-x-5 pt-[4.5px] capitalize tracking-[0px] py-20 px-20`}
      >
        <div className="text-[32px] font-semibold leading-[1.1]  text-indigo-950">
          Featured Products
        </div>
        <div className="flex flex-grow flex-wrap items-center justify-center gap-x-4 gap-y-6 leading-[1.3] min-[1910px]:flex-nowrap">
          {/* Product 1 */}
          <Link href={'../detail'}>
          <div className="flex flex-col items-start gap-y-3.5 self-stretch">
            <div className="bg-image h-80 w-80 flex-shrink-0 rounded-md bg-cover bg-center relative ">
              <div className="rounded bg-green-600 px-2.5 py-1.5 text-center text-[13px] font-medium leading-[1.1] text-white absolute top-4 left-4">
                New
              </div>
              <img
                src="/img/p1.png"
                alt="Library Stool Chair"
                className="h-[312px] w-[312px] object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-x-32">
              <div className="flex flex-grow flex-col items-start gap-y-2.5 [max-width:256px]">
                <div className="self-stretch text-[teal]">Library Stool Chair</div>
                <div className="text-lg font-semibold leading-[1.1] text-indigo-950">
                  $20
                </div>
              </div>
              <div className="flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-[cadetblue] p-2.5">
              <Image src={'/img/cart.png'} width={24} height={24} alt=""/>
              </div>
            </div>
          </div></Link>
  
          {/* Product 2 */}
          <Link href={'../detail'}>
          <div className="flex flex-col items-start gap-y-3.5 self-stretch">
            <div className="bg-image h-80 w-80 flex-shrink-0 rounded-[10px] bg-cover bg-center relative">
              <div className="rounded bg-orange-500 px-2.5 py-1.5 text-center text-[13px] font-medium leading-[1.1] text-white absolute top-4 left-4 ">
                Sales
              </div>
              <img
                src="/img/p2.png"
                alt="Library Stool Chair"
                className="h-[312px] w-[312px] object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-x-32">
              <div className="flex flex-grow flex-col items-start gap-y-2.5 text-indigo-950 [max-width:256px]">
                <div className="self-stretch">Library Stool Chair</div>
                <div className="flex items-center gap-x-1 leading-[1.1]">
                  <div className="text-lg font-semibold leading-[1.1]">$20</div>
                  <div className="text-sm leading-[1.1] text-zinc-400 line-through">
                    $39
                  </div>
                </div>
              </div>
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 p-[11px]">
              <Image src={'/img/cart.png'} width={24} height={24} alt=""/>
              </div>
            </div>
          </div></Link>
  
          {/* Product 3 */}
          <Link href={'../detail'}>
          <div className="flex flex-col items-start gap-y-3.5 self-stretch">
            <div className="bg-image h-80 w-80 flex-shrink-0 rounded-md bg-cover bg-center">
              <img
                src="/img/p3.png"
                alt="Library Stool Chair"
                className="h-[312px] w-[312px]  object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-x-32">
              <div className="flex flex-grow flex-col items-start gap-y-2.5 text-indigo-950 [max-width:256px]">
                <div className="self-stretch">Library Stool Chair</div>
                <div className="flex items-center gap-x-1 leading-[1.1]">
                  <div className="text-lg font-semibold leading-[1.1]">$20</div>
                 
                </div>
              </div>
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 p-[11px]">
              <Image src={'/img/cart.png'} width={24} height={24} alt=""/>
              </div>
            </div>
          </div></Link>
  
          {/* Product 4 */}
          <Link href={'../detail'}>
          <div className="flex flex-col items-start gap-y-3.5 self-stretch">
            <div className="bg-image h-80 w-80 flex-shrink-0 rounded-md bg-cover bg-center">
              <img
                src="/img/p4.png"
                alt="Library Stool Chair"
                className="h-[312px] w-[312px] object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-x-32">
              <div className="flex flex-grow flex-col items-start gap-y-2.5 text-indigo-950 [max-width:256px]">
                <div className="self-stretch">Library Stool Chair</div>
                <div className="flex items-center gap-x-1 leading-[1.1]">
                  <div className="text-lg font-semibold leading-[1.1]">$20</div>
                  
                </div>
              </div>
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 p-[11px]">
              <Image src={'/img/cart.png'} width={24} height={24} alt=""/>
              </div>
            </div>
          </div></Link>
        </div>
      </div>
    );
  }
  
  