const fs = require('fs');
const path = 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\e39633aa-a691-443c-8d82-ad1960cfd686\\.system_generated\\logs\\overview.txt';
const lines = fs.readFileSync(path, 'utf8').split('\n');
const line840 = lines.find(l => l.includes('"step_index":840'));
if (line840) {
    const data = JSON.parse(line840);
    const content = data.content;
    const jsonStart = content.indexOf('{');
    const jsonEnd = content.lastIndexOf('}') + 1;
    const jsonStr = content.substring(jsonStart, jsonEnd);
    const fullData = JSON.parse(jsonStr);
    fs.writeFileSync('extracted_data.json', JSON.stringify(fullData, null, 2));
    console.log('Successfully extracted data to extracted_data.json');
} else {
    console.log('Step 840 not found');
}
