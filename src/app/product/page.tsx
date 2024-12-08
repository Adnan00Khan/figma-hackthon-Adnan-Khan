import Image from "next/image";
import { Open_Sans } from 'next/font/google';
import Link from "next/link";

const opens = Open_Sans({ subsets: ['latin'] });

export default function Products() {
  return (
    <div>
      <div className={`font-inter flex w-full flex-col items-start gap-y-11 space-x-5 md:p-20 p-1 capitalize tracking-[0px]`}>
        <div className="text-[32px] font-semibold leading-[1.1] px-5 text-indigo-950">
          All Products
        </div>
        
        {/* Grid for products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {/* Product 1 */}
          <Link href={'../detail'}>
          <div className="flex flex-col items-start gap-y-3.5 self-stretch">
            <div className="bg-image h-80 w-80 flex-shrink-0 rounded-md bg-cover bg-center relative ">
              <div className="rounded bg-green-600 px-2.5 py-1.5 text-center text-[13px] font-medium leading-[1.1] text-white absolute top-4 left-4">
                New
              </div>
              <img
                src="/img/top2.png"
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
                src="/img/item4.png"
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
                src="/img/p5.png"
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
                src="/img/p1.png"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {/* Product 1 */}
          <Link href={'../detail'}>
          <div className="flex flex-col items-start gap-y-3.5 self-stretch">
            <div className="bg-image h-80 w-80 flex-shrink-0 rounded-md bg-cover bg-center relative ">
              <div className="rounded bg-green-600 px-2.5 py-1.5 text-center text-[13px] font-medium leading-[1.1] text-white absolute top-4 left-4">
                New
              </div>
              <img
                src="/img/top1.png"
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
                src="/img/top3.png"
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
        
        <div className="font-roboto relative z-0 flex w-full flex-col items-center gap-y-8 bg-gray-100 px-10 py-24 text-center text-4xl font-medium capitalize leading-normal">
          {/* Header */}
          <div className="text-[50px] font-semibold">Or subscribe to the newsletter</div>

          {/* Email Subscription */}
          <div className="flex flex-col items-center gap-4 pt-16">
            <div className="flex items-center justify-center gap-x-4">
              <input
                type="email"
                placeholder="Email address..."
                className="flex-1 w-[300px] sm:w-[400px] md:w-[500px] border-b-2 border-black bg-gray-100 px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className={`${opens.className} bg-gray-100 px-6 py-2 text-sm font-normal text-black border-b-2 border-black`}>
                SUBMIT
              </button>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="mt-12 text-[50px] font-semibold">Follow products and discounts on Instagram</div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Instagram Images */}
            <img className="h-52 w-52 rounded-md object-cover" src="/img/top2.png" alt="Instagram Post 1" loading="lazy" />
            <img className="h-52 w-52 rounded-md object-cover" src="/img/top1.png" alt="Instagram Post 2" loading="lazy" />
            <img className="h-52 w-52 rounded-md object-cover" src="/img/p2.png" alt="Instagram Post 3" loading="lazy" />
            <img className="h-52 w-52 rounded-md object-cover" src="/img/p1.png" alt="Instagram Post 4" loading="lazy" />
            <img className="h-48 w-48 rounded-md object-cover" src="/img/item1.png" alt="Instagram Post 5" loading="lazy" />
            <img className="h-52 w-52 rounded-md object-cover" src="/img/top3.png" alt="Instagram Post 6" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

