  <?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  // Получаем данные из POST-запроса
  $nameUser = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $service = $_POST['comments'];

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  // Измени адрес отправителя и имя отправителя согласно своим предпочтениям
  $mail->setFrom('info@zhiganova.com', 'Сайт zhiga-nova.ru');

  // Замени адрес получателя на тот, куда ты хочешь получать электронные письма
  $mail->addAddress('darya.daria@bk.ru');

  // Тема письма
  $mail->Subject = 'Заявка с сайта';

  // Формируем тело письма
  $body = '<h1>Данные из формы</h1>';
  $body .= '<p>Имя пользователя: ' . htmlspecialchars($nameUser) . '</p>';
  $body .= '<p>Email: ' . htmlspecialchars($email) . '</p>';
  $body .= '<p>Телефон: ' . htmlspecialchars($phone) . '</p>';
  $body .= '<p>Комментарий: ' . htmlspecialchars($service) . '</p>';

  $mail->Body = $body;

  if (!$mail->send()) {
      $message = 'Ошибка';
  } else {
      $message = 'Всё нормально';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
  ?>
