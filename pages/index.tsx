import React from 'react';

import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/detail">
      <button>Go to Detail Page</button>
    </Link>
    <p>Hello Capucco</p>
  </div>
)

export default Index;