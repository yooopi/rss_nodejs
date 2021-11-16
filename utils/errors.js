class ArgumentsError extends Error {
  constructor(message) {
    super(message);
    this.name = "ArgumentsError";
  }
}

class ArgumentRequiredError extends ArgumentsError {
  constructor(argumentName) {
    super(
      `Missed required argument! Pass ${argumentName} as '-${argumentName[0]}' or '--${argumentName}'`
    );
    this.name = "ArgumentRequiredError";
    this.argumentName = argumentName;
  }
}

class ArgumentDuplicateError extends ArgumentsError {
  constructor(argumentName) {
    super(`Duplicated arguemnt: ${argumentName}`);
    this.name = "ArgumentDuplicateError";
    this.argumentName = argumentName;
  }
}

class CipherConfigError extends ArgumentsError {
  constructor(cipher) {
    super(`Wrong config, change cipher: ${cipher}`);
    this.name = "CipherConfigError";
    this.cipher = cipher;
  }
}

class CipherModerError extends Error {
  constructor(cipher) {
    super(`Argument 'mode' is required for ${cipher} transform stream!\n`);
    this.name = "CipherModerError";
    this.cipher = cipher;
  }
}

class FileError extends Error {
  constructor(file) {
    super(`${file} does not exist or permission denied`);
    this.name = "FileError";
    this.file = file;
  }
}

module.exports = {
  ArgumentRequiredError,
  ArgumentDuplicateError,
  CipherConfigError,
  CipherModerError,
  FileError,
};
