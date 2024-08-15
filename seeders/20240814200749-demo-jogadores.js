"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Jogadors",
      [
        {
          nome: "Mateus Donelli",
          posicao: "Goleiro",
          idade: 22,
          imagem: "https://i.ibb.co/zXJGtnQ/donelli.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Hugo Souza",
          posicao: "Goleiro",
          idade: 25,
          imagem: "https://i.ibb.co/LYDQgch/hugo.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "André Ramalho",
          posicao: "Zagueiro",
          idade: 32,
          imagem: "https://i.ibb.co/P9ctxzL/andre-ramalho.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Félix Torres",
          posicao: "Zagueiro",
          idade: 27,
          imagem: "https://i.ibb.co/cLpXs3s/felix.png",
          nacionalidade: "Equador",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Gustavo Henrique",
          posicao: "Zagueiro",
          idade: 31,
          imagem: "https://i.ibb.co/DwWWk6Y/gustavo-henrique.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Fagner",
          posicao: "Lateral",
          idade: 35,
          imagem: "https://i.ibb.co/9VwBFtN/fagner.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Charles",
          posicao: "Volante",
          idade: 28,
          imagem: "https://i.ibb.co/6vnsndM/charles.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Raniele",
          posicao: "Volante",
          idade: 27,
          imagem: "https://i.ibb.co/hmbzS4B/raniele.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Igor Coronado",
          posicao: "Meia",
          idade: 31,
          imagem: "https://i.ibb.co/121JV51/igor.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Rodrigo Garro",
          posicao: "Meia",
          idade: 26,
          imagem: "https://i.ibb.co/cg6B34Y/garro.png",
          nacionalidade: "Argentina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Pedro Raul",
          posicao: "Atacante",
          idade: 27,
          imagem: "https://i.ibb.co/BBDPbt5/pedro-raul.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Angel Romero",
          posicao: "Atacante",
          idade: 32,
          imagem: "https://i.ibb.co/1fZ4HXN/romero.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Yuri Alberto",
          posicao: "Atacante",
          idade: 23,
          imagem: "https://i.ibb.co/ZMhkfjx/yuri.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Talles Magno",
          posicao: "Atacante",
          idade: 22,
          imagem: "https://i.ibb.co/hMzkLM7/talles.png",
          nacionalidade: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jogadors", null, {});
  },
};
