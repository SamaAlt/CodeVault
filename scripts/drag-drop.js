document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality (same as butterfly.js)
    const tabs = document.querySelectorAll('.tab');
    const codeContents = document.querySelectorAll('.code-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            codeContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            const tabName = tab.getAttribute('data-tab');
            document.querySelector(`.${tabName}-code`).classList.add('active');
        });
    });

    // Drag & Drop functionality
    const dropZone = document.querySelector('.drop-zone');
    const fileInput = document.querySelector('.drop-zone__input');
    const preview = document.querySelector('.file-preview');

    dropZone.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', e => {
        if (fileInput.files.length) {
            handleFiles(fileInput.files);
        }
    });

    dropZone.addEventListener('dragover', e => {
        e.preventDefault();
        dropZone.classList.add('drop-zone--over');
    });

    ['dragleave', 'dragend'].forEach(type => {
        dropZone.addEventListener(type, () => {
            dropZone.classList.remove('drop-zone--over');
        });
    });

    dropZone.addEventListener('drop', e => {
        e.preventDefault();
        dropZone.classList.remove('drop-zone--over');
        
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            handleFiles(e.dataTransfer.files);
        }
    });

    function handleFiles(files) {
        preview.innerHTML = '';
        Array.from(files).forEach(file => {
            const fileElement = document.createElement('div');
            fileElement.className = 'file-item';
            
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                fileElement.appendChild(img);
            }
            
            const fileInfo = document.createElement('span');
            fileInfo.textContent = `${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
            fileElement.appendChild(fileInfo);
            
            preview.appendChild(fileElement);
        });
    }
    
    // Console message specific to this feature
    console.log('%cDrag & Drop Feature Loaded', 'color: #6e48aa; font-weight: bold;');
});
