export default function createTemplate() {
  const BODY = document.body;
  const heading = document.createElement('h1');
  heading.textContent = 'Virtual Keyboard';
  heading.classList.add('heading');
  const input = document.createElement('TEXTAREA');
  input.setAttribute('name', 'text_area');
  input.setAttribute('maxlength', 5000);
  input.setAttribute('cols', 80);
  input.setAttribute('rows', 40);
  input.classList.add('text_area');
  BODY.append(input);
  const keybordArea = document.createElement('div');
  keybordArea.classList.add('keybord_area');
  BODY.append(heading, input, keybordArea);
}
// createTemplate();
