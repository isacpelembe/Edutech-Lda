<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/config/config.php';
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        "status" => "error",
        "message" => "Método inválido"
    ]);
    exit;
}

$nome = trim(strip_tags($_POST['nome'] ?? ''));
$telefone = trim(strip_tags($_POST['telefone'] ?? ''));
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$mensagem = trim(strip_tags($_POST['mensagem'] ?? ''));

if (!$nome || !$telefone || !$email || !$mensagem) {
    echo json_encode([
        "status" => "error",
        "message" => "Todos os campos são obrigatórios e o email deve ser válido."
    ]);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;

    $mail->Username   = getenv('SMTP_USER') ?: 'edutechlda@gmail.com';
    $mail->Password   = getenv('SMTP_PASS') ?: 'SENHA_DE_APP_AQUI';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->CharSet = 'UTF-8';

    $mail->setFrom('edutechlda@gmail.com', 'Formulário do Site');
    $mail->addAddress('edutechlda@gmail.com');
    $mail->addReplyTo($email, $nome);

    $mail->isHTML(false);
    $mail->Subject = '📩 Nova mensagem do site';

    $mail->Body = <<<TEXT
Nova mensagem recebida pelo site:

Nome: $nome
Telefone: $telefone
Email: $email

Mensagem:
$mensagem
TEXT;

    $mail->send();

    echo json_encode([
        "status" => "success",
        "message" => "Mensagem enviada com sucesso!"
    ]);

} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => "Erro ao enviar a mensagem. Tente novamente mais tarde."
    ]);
}
