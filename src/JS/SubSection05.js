document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.sectino05-upbox-right .tab');

    console.log(tabs);
    const tables = document.querySelectorAll('.pipeline-table');
    console.log(tables);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 탭 active 처리
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 테이블 토글
            const target = tab.dataset.target;
            tables.forEach(table => {
                table.classList.remove('active');
                if (table.id === target) {
                    table.classList.add('active');
                }
            });
        });
    });

})