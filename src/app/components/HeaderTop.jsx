'use client';

export default function HeaderTop() {
  return (
    <header id="header-top" className="bg-[#f7f7f7] py-[5px]">
      <ul>
        <li>
          <div>
            <ul className="flex gap-5 list-none p-0 m-0">
              <li>
                <a
                  href="tel:+919942381376"
                  className="text-[#333] no-underline text-sm"
                >
                  +91 99423 81376
                </a>
              </li>
              <li>
                <a
                  href="tel:+918880888495"
                  className="text-[#333] no-underline text-sm"
                >
                  +91 88808 88495
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@gmail.com"
                  className="text-[#333] no-underline text-sm"
                >
                  support@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </header>
  );
}
