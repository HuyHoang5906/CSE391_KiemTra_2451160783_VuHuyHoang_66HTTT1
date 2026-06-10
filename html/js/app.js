document.addEventListener("DOMContentLoaded", () => {
    let currentData = [...records];
    const listContainer = document.getElementById('recordList');
    const countDisplay = document.getElementById('recordCount');
    const form = document.getElementById('addForm');
    const tabs = document.querySelectorAll('.tab-btn');

    const getStatusClass = (status) => {
        if(status === 'Hoàn thành') return 'hoan-thanh';
        if(status === 'Đang triển khai') return 'dang-trien-khai';
        return 'chua-bat-dau';
    };

    const renderList = (data) => {
        listContainer.innerHTML = '';
        countDisplay.textContent = data.length;
        
        data.forEach(item => {
            const statusClass = getStatusClass(item.status);
            const card = document.createElement('div');
            card.className = `record-card status-${statusClass}`;
            card.innerHTML = `
                <div class="record-header">
                    <div class="record-title">
                         ${item.name}
                    </div>
                    <span class="badge ${statusClass}">${item.status}</span>
                </div>
                <div class="record-unit"> ${item.unit}</div>
                <div class="record-desc">${item.desc}</div>
            `;
            listContainer.appendChild(card);
        });
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            
            const filterValue = e.target.getAttribute('data-filter');
            if (filterValue === 'Tất cả') {
                renderList(currentData);
            } else {
                const filtered = currentData.filter(item => item.status === filterValue);
                renderList(filtered);
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newRecord = {
            id: currentData.length + 1,
            name: document.getElementById('schoolName').value,
            unit: document.getElementById('manageUnit').value,
            status: document.getElementById('status').value,
            desc: document.getElementById('description').value
        };

        currentData.unshift(newRecord);
        
        form.reset();
        document.querySelector('.tab-btn[data-filter="Tất cả"]').click(); 
    });

    renderList(currentData);
});