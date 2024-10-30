const ctxBar = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue',
            data: [12000, 19000, 3000, 5000, 20000, 30000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 68, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 68, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// pie chart pertama
const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
const myPieChart1 = new Chart(ctxPie1, {
    type: 'pie',
    data: {
        labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
        datasets: [{
            label: 'Expenses',
            data: [5000, 2000, 15000, 3000, 5000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 68, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 68, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

// pie chart kedua
const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
const myPieChart2 = new Chart(ctxPie2, {
    type: 'pie',
    data: {
        labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
        datasets: [{
            label: 'Expenses',
            data: [300, 22000, 1000, 30000, 25000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 68, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 68, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
$(document).ready(function() {
    // Set posisi awal untuk semua card
    $('.card-container .card').css({
        'opacity': '0',
        'transform': 'translateY(50px)',
        'transition': 'all 0.8s ease-out'
    });

    // Fungsi untuk animasi card satu per satu
    $('.card-container .card').each(function(index) {
        var card = $(this);
        setTimeout(function() {
            card.css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, index * 300); // Delay berdasarkan index
    });

    // Set posisi awal untuk charts
    $('.charts-container').css({
        'opacity': '0',
        'transform': 'translateY(50px)',
        'transition': 'all 0.8s ease-out'
    });

    // Animasi untuk charts setelah semua card muncul
    setTimeout(function() {
        $('.charts-container').css({
            'opacity': '1',
            'transform': 'translateY(0)'
        });
    }, $('.card-container .card').length * 300 + 300); // Delay setelah semua card
});

$(document).ready(function() {
    // Efek hover pada card
    $('.card-container .card').hover(
        function() {
            $(this).css('filter', 'brightness(1.3)'); // Mencerahkan warna saat hover
        },
        function() {
            $(this).css('filter', 'brightness(1)'); // Kembali ke warna normal
        }
    );

    // Efek hover pada chart
    $('.charts-container .chart').hover(
        function() {
            $(this).css('filter', 'brightness(1.2)'); // Mencerahkan warna saat hover
        },
        function() {
            $(this).css('filter', 'brightness(1)'); // Kembali ke warna normal
        }
    );

    // Set posisi awal untuk semua card
    $('.card-container .card').css({
        'opacity': '0',
        'transform': 'translateY(50px)',
        'transition': 'all 0.8s ease-out'
    });

    // Fungsi untuk animasi card satu per satu
    $('.card-container .card').each(function(index) {
        var card = $(this);
        setTimeout(function() {
            card.css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, index * 300); // Delay berdasarkan index
    });

    // Set posisi awal untuk charts
    $('.charts-container').css({
        'opacity': '0',
        'transform': 'translateY(50px)',
        'transition': 'all 0.8s ease-out'
    });

    // Animasi untuk charts setelah semua card muncul
    setTimeout(function() {
        $('.charts-container').css({
            'opacity': '1',
            'transform': 'translateY(0)'
        });
    }, $('.card-container .card').length * 300 + 300); // Delay setelah semua card
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('main');
    const toggleBtn = document.querySelector('.menu-icon');
    const logoName = document.querySelector('.logo-name');
    const header = document.querySelector('.header');
    
    toggleBtn.addEventListener('click', () => {
        console.log('Tombol hamburger diklik');
        
        // Menambahkan atau menghapus kelas 'closed' untuk sidebar dan 'header-closed' untuk header
        sidebar.classList.toggle('closed');
        mainContent.classList.toggle('shift');
        header.classList.toggle('header-closed'); 
        
        // Menyembunyikan atau menampilkan logo sesuai status sidebar
        if (sidebar.classList.contains('closed')) {
            logoName.style.display = 'none';
        } else {
            logoName.style.display = 'block';
        }
    });
});


    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.querySelector('.dropdown-content').classList.toggle('show');
        });
    });

    document.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('.dropdown-content').classList.remove('show');
        });
    });
