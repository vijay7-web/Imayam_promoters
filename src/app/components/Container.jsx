// components/Container.jsx
'use client';

export default function Container({ children }) {
  return (
    <div className="mx-auto  max-w-full">
      {children}
    </div>
  );
}
