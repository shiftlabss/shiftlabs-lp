import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const appPath = path.join(root, "src/app/App.tsx");
const source = await readFile(appPath, "utf8");

const forbiddenSnippets = [
  "Bloco 2",
  "Responda as perguntas do bloco 2",
  "Agora me fala aqui o que a ShiftLabs ganha contratando você",
  "pipeline interno",
  "perfil alinhado a /{displayArea}",
  "Configuração de backend indisponível",
  "A Shift Labs transforma",
  "A Shift Labs não é",
  "/Para Quem é a Shift Labs",
  "Produto, Tech, Growth e Operações",
  "ownership alto",
  "seuemail@exemplo.com",
  "linkedin.com/in/seu-perfil",
  "Retornamos em alguns dias úteis",
  "Retornaremos em breve",
  "What makes us different",
  "Ready to structure what you’re building?",
  "/Call to Action",
  "Most players optimize pieces. We optimize the system.",
  "IA na mesa.",
  "IA aplicada à experiência de restaurante",
  "Camada de inteligência organizacional.",
];

const requiredSnippets = [
  "Perguntas de alinhamento inicial",
  "Responda todas as perguntas de alinhamento para enviar.",
  "Conte como sua experiência pode gerar impacto nesta vaga",
  "Usaremos seus dados apenas para avaliar sua candidatura.",
  "Não conseguimos enviar pelo formulário agora.",
  "A ShiftLabs transforma",
  "A ShiftLabs não é",
  "/Para Quem é a ShiftLabs",
  "Produto, Tecnologia, Growth e Operações",
  "Times enxutos, autonomia clara",
  "nome@exemplo.com",
  "linkedin.com/in/seu-nome ou portfolio.com",
  "Retornamos em até 5 dias úteis",
  "Retornaremos em até 2 dias úteis",
  "ver detalhes",
  "/Como trabalhamos",
  "Da primeira conversa à execução coordenada.",
  "Diagnóstico estrutural",
  "Arquitetura de execução",
  "Implementação coordenada",
  "O que torna a ShiftLabs diferente",
  "Muita gente melhora peças soltas. A ShiftLabs estrutura o sistema.",
  "Vamos estruturar o que sua empresa precisa executar agora?",
  "iniciar diagnóstico",
  "Tecnologia aplicada à experiência de restaurante.",
  "Coordenação organizacional para empresas em crescimento.",
  "Contato",
];

const forbiddenPatterns = [
  { label: "CTA exato ainda usa ver vaga", pattern: />\s*ver vaga\s*</ },
];

const failures = [];

for (const snippet of forbiddenSnippets) {
  if (source.includes(snippet)) {
    failures.push(`copy proibida ainda presente: ${snippet}`);
  }
}

for (const { label, pattern } of forbiddenPatterns) {
  if (pattern.test(source)) {
    failures.push(label);
  }
}

for (const snippet of requiredSnippets) {
  if (!source.includes(snippet)) {
    failures.push(`copy esperada ausente: ${snippet}`);
  }
}

if (failures.length) {
  console.error("[ux-copy] Falhas encontradas:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("[ux-copy] Copy validada.");
