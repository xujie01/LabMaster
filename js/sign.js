/*复选框*/
$("input[type='checkbox']").iCheck({
    checkboxClass: 'icheckbox_flat-blue',
});
/*验证码*/
function changeCaptcha() {
    $('#img-captcha').attr('src', '/s/captcha/gen?rand=' + (new Date));
}
/*切换登陆注册*/
$("#link-signup").bind("click", function() {
    $("#signin").addClass("hide");
    $("#signup").removeClass("hide")
});
$("#link-signin").bind("click", function() {
    $("#signup").addClass("hide");
    $("#signin").removeClass("hide")
});

/*var password = "";
$("#form-signin").bind("form-pre-serialize", function(s, i, n, a) {
    password = $("#input-password").val();
    $("#input-password").val(CryptoJS.SHA1(password))
});
$("#form-signin").ajaxForm({
    beforeSubmit: function(s, i, n) {
        $.noty.closeAll();
        if ($("#input-email").val().trim().length == 0) {
            $("#input-password").val(password);
            $("#input-email").focus();
            showError("请输入邮箱");
            return false
        } else if (password.length == 0) {
            $("#input-password").val(password);
            $("#input-password").focus();
            showError("请输入密码");
            return false
        }
        $("#submit-signin").addClass("disabled")
    },
    success: function(s) {
        if (s.code == 1) {
            $("#input-password").val(password);
            showError(s.msg);
            $("#submit-signin").removeClass("disabled")
        } else if (s.code == 2) {
            location.href = "/confirm?email=" + s.email
        } else {
            var i = s.data;
            if (!i) {
                location.href = "/dashboard"
            } else {
                location.href = i
            }
        }
    },
    error: function() {
        $("#input-password").val(password);
        $("#submit-signin").removeClass("disabled")
    }
});
var password1, password2, submitEnable, email;
$("#form-signup").bind("form-pre-serialize", function(s, i, n, a) {
    password1 = $("#input-password1").val();
    password2 = $("#input-password2").val();
    $("#input-password1").val(CryptoJS.SHA1(password1));
    $("#input-password2").val(CryptoJS.SHA1(password2))
});
$("#form-signup").ajaxForm({
    beforeSubmit: function(s, i, n) {
        $.noty.closeAll();
        email = $("#input-signup-email").val().trim();
        submitEnable = true;
        if (email.length == 0) {
            $("#input-password1").val(password1);
            $("#input-password2").val(password2);
            $("#input-signup-email").focus();
            showError("请输入作为帐号的邮箱");
            submitEnable = false;
            return submitEnable
        } else if (!$("#checkbox-signup").is(":checked")) {
            showError("请同意许可");
            $("#checkbox-signup").focus();
            submitEnable = false;
            return submitEnable
        } else if (password1.length == 0) {
            $("#input-password1").focus();
            showError("请输入密码");
            submitEnable = false;
            return submitEnable
        } else if (password2.length == 0) {
            $("#input-password2").focus();
            showError("请再次输入密码");
            submitEnable = false;
            return submitEnable
        } else if (password1 !== password2) {
            showError("两次输入的密码不一致");
            submitEnable = false;
            return submitEnable
        } else if ($("#input-captcha").val().length != 5) {
            $("#input-password1").val(password1);
            $("#input-password2").val(password2);
            $("#input-captcha").focus();
            showError("请输入正确的验证码");
            submitEnable = false;
            return submitEnable
        }
    },
    success: function(s) {
        if (s.length > 0) {
            $("#input-password1").val(password1);
            $("#input-password2").val(password2);
            showError(s);
            changeCaptcha()
        } else {
            showInfo("注册成功！请登录注册邮箱激活账户");
            $("#signup").addClass("hide");
            $("#signin").removeClass("hide")
        }
    },
    error: function() {
        $("#input-password1").val(password1);
        $("#input-password2").val(password2);
        changeCaptcha()
    }
});
var ensureSigninEnable = function() {
    var s = true;
    if ($("#input-email").val().trim().length == 0) {
        s = false
    }
    if ($("#input-password").val().trim().length == 0) {
        s = false
    }
    if (s) {
        $("#submit-signin").removeClass("disabled")
    } else {
        $("#submit-signin").addClass("disabled")
    }
};
$("#input-email").bind("input", function() {
    ensureSigninEnable()
});
$("#input-password").bind("input", function() {
    ensureSigninEnable()
});
var ensureSignupEnable = function() {
    var s = true;
    if ($("#input-signup-email").val().trim().length == 0) {
        s = false
    }
    if ($("#input-password1").val().length == 0 || $("#input-password2").val().length == 0) {
        s = false
    }
    if ($("#input-password1").val() !== $("#input-password2").val()) {
        s = false
    }
    if ($("#input-captcha").val().length !== 5) {
        s = false
    }
    if ($("#checkbox-signup:checked").length === 0) {
        s = false
    }
    if (s) {
        $("#submit-signup").removeClass("disabled")
    } else {
        $("#submit-signup").addClass("disabled")
    }
};
$("#input-signup-email").bind("input", function() {
    ensureSignupEnable()
});
$("#input-password1").bind("input", function() {
    ensureSignupEnable()
});
$("#input-password2").bind("input", function() {
    ensureSignupEnable()
});
$("#input-captcha").bind("input", function() {
    ensureSignupEnable()
});
$("#checkbox-signup").on("ifChecked", function(s) {
    ensureSignupEnable()
});
$("#checkbox-signup").on("ifUnchecked", function(s) {
    ensureSignupEnable()
});*/
