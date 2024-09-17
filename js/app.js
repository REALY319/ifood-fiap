// Filtro de busca (se aplicável)
document.getElementById("search")?.addEventListener("input", function () {
  let filter = this.value.toUpperCase();
  let rows = document.querySelectorAll("#transactionsTable tr");

  rows.forEach((row) => {
    let description =
      row.getElementsByTagName("td")[1].textContent ||
      row.getElementsByTagName("td")[1].innerText;
    row.style.display =
      description.toUpperCase().indexOf(filter) > -1 ? "" : "none";
  });
});

// Dados para o gráfico
const data = {
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
  datasets: [
    {
      label: "Receitas",
      data: [15000, 20000, 18000, 22000, 25000, 27000],
      backgroundColor: "rgba(40, 167, 69, 0.2)", // Cor verde translúcida
      borderColor: "rgba(40, 167, 69, 1)", // Cor verde sólida
      borderWidth: 2,
      fill: false,
      tension: 0.1,
    },
    {
      label: "Despesas",
      data: [10000, 12000, 9000, 14000, 16000, 15000],
      backgroundColor: "rgba(220, 53, 69, 0.2)", // Cor vermelha translúcida
      borderColor: "rgba(220, 53, 69, 1)", // Cor vermelha sólida
      borderWidth: 2,
      fill: false,
      tension: 0.1,
    },
  ],
};

// Configurações do gráfico
const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Receitas e Despesas Mensais",
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value, index, values) {
            return "R$ " + value.toLocaleString("pt-BR");
          },
        },
      },
    },
  },
};

// Renderizar o gráfico
window.onload = function () {
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, config);
};
