const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const diagramsDir = path.join(__dirname, 'diagrams');
if (!fs.existsSync(diagramsDir)) {
  fs.mkdirSync(diagramsDir);
}

const diagrams = [
  { input: 'mermaid_data_model.txt', output: 'data_model.svg' },
  { input: 'mermaid_system_architecture.txt', output: 'system_architecture.svg' }
];

diagrams.forEach(({ input, output }) => {
  try {
    const outPath = path.join('diagrams', output);
    execSync(`npx -y @mermaid-js/mermaid-cli -i ${input} -o ${outPath}`, {
      stdio: 'inherit'
    });
    console.log(`Generated: ${outPath}`);
  } catch (error) {
    console.error(`Failed to generate diagram for ${input}:`, error.message);
  }
}); 