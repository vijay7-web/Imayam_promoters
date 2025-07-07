'use client';

export default function HeaderTop() {
  return (
    <header id="header-top" className="bg-[#2e2e2e] py-[5px]">
      <ul>
        <li>
          <div>
            <ul className="flex gap-5 list-none p-0 ml-2">
              <li>
                <a
                  href="tel:+919942381376"
                  className="text-gray-100 no-underline text-sm"
                >
                  +91 99423 81376
                </a>
              </li>
              <span className="text-gray-100  mx-2">|</span>
              <li>
                <a
                  href="tel:+918880888495"
                  className="text-gray-100 no-underline text-sm"
                >
                  +91 88808 88495
                </a>
              </li>
                            <span className="text-gray-100  mx-2">|</span>
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
