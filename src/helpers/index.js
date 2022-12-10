export function checkInput(username, age) {
  // checa se o username é digito
  let status = true;
  const regex = /^[a-zA-Z]+$/;
  if (!username.match(regex)) {
    const outMessage = {
      title: 'Dados invalidos',
      message: 'Por favor insira um nome caracteres válidos( apenas números não é permitido)',
    };
    status = false;
    return [status, outMessage];
  }
  // checa se os campos estão vazios
  if (username.trim().length === 0 || age.trim().length === 0) {
    const outMessage = {
      title: 'Dados invalidos',
      message:
        'Por favor insira um nome ou idade com caracteres válidos( dados em branco não é permitido)',
    };
    status = false;
    return [status, outMessage];
  }
  // checa se a idade é menor que 1
  if (+age < 1) {
    const outMessage = {
      title: 'Dados invalidos',
      message: 'Por favor insira idade maior que zero',
    };
    status = false;
    return [status, outMessage];
  }
  return [status, null];
}
