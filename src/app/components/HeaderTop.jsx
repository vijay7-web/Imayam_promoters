'use client';

export default function HeaderTop() {
  return (
    <header id="header-top" className="bg-[#2e2e2e] py-[5px]">
      <ul className="m-0 p-0">
        <li>
          <div>
            <ul className="flex flex-col sm:flex-row sm:gap-5 gap-2 list-none p-0 ml-2 sm:items-center">
              <li>
                <a
                  href="tel:+919942381376"
                  className="text-gray-100 no-underline text-sm"
                >
                  +91 99423 81376
                </a>
              </li>
              <span className="text-gray-100 sm:mx-2 hidden sm:inline">|</span>
              <li>
                <a
                  href="tel:+918880888495"
                  className="text-gray-100 no-underline text-sm"
                >
                  +91 88808 88495
                </a>
              </li>
              <span className="text-gray-100 sm:mx-2 hidden sm:inline">|</span>
              <li>
                <a
                  href="mailto:admin@imayampromoters.com"
                  className="text-gray-100 no-underline text-sm"
                >
                  admin@imayampromoters.com
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </header>
  );
}
