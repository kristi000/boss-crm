
import React, { useState } from 'react';
import Modal from './Modal';

export default function SearchForm() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Search</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div>Search Form</div>
        </Modal>
      )}
    </div>
  );
}
```

